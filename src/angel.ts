import { Address, BigInt, Bytes } from "@graphprotocol/graph-ts";
import {
  AddedBeneficiary as AddedBeneficiaryEvent,
  AssetClaimed as AssetClaimedEvent,
  AssetReclaimed as AssetReclaimedEvent,
  AssetSent as AssetSentEvent,
} from "../generated/Angel/Angel";

import { TransactionEntity, BeneficiaryEntity } from "../generated/schema";

export function handleAddedBeneficiary(event: AddedBeneficiaryEvent): void {
  let beneficiaryEntity = new BeneficiaryEntity(
    generateBeneficiaryID(
      event.transaction.hash,
      event.params.sender,
      event.params.sender
    )
  );
  beneficiaryEntity.sender = event.params.sender;
  beneficiaryEntity.beneficiary = event.params.beneficiary;

  beneficiaryEntity.save();
}

export function handleAssetSent(event: AssetSentEvent): void {
  let txEntity = TransactionEntity.load(
    generateTransactionEntityId(
      event.params.txReference,
      event.params.sender,
      event.params.recipient
    )
  );

  if (!txEntity)
    txEntity = new TransactionEntity(
      generateTransactionEntityId(
        event.params.txReference,
        event.params.sender,
        event.params.recipient
      )
    );

  txEntity.sender = event.params.sender;
  txEntity.senderUserName = event.params.senderUserName;
  txEntity.recipient = event.params.recipient;
  txEntity.recipientUserName = event.params.recipientUserName;
  txEntity.asset = event.params.asset;
  txEntity.amountOrTokenId = event.params.amount;
  txEntity.narration = event.params.narration;
  txEntity.status = event.params.status;
  txEntity.txReference = event.params.txReference;
  txEntity.time = event.params.time;
  txEntity.txType = event.params.txType;

  txEntity.claimTime = BigInt.zero();
  txEntity.reclaimTime = BigInt.zero();

  txEntity.save();
}

export function handleAssetClaimed(event: AssetClaimedEvent): void {
  let txEntity = TransactionEntity.load(
    generateTransactionEntityId(
      event.params.txReference,
      event.params.sender,
      event.params.recipient
    )
  );

  if (!txEntity)
    txEntity = new TransactionEntity(
      generateTransactionEntityId(
        event.params.txReference,
        event.params.sender,
        event.params.recipient
      )
    );

  txEntity.recipientUserName = event.params.recipientUserName;
  txEntity.status = event.params.status;

  txEntity.claimTime = event.block.timestamp;
  txEntity.reclaimTime = BigInt.zero();

  txEntity.save();
}

export function handleAssetReclaimed(event: AssetReclaimedEvent): void {
  let txEntity = TransactionEntity.load(
    generateTransactionEntityId(
      event.params.txReference,
      event.params.sender,
      event.params.recipient
    )
  );

  if (!txEntity)
    txEntity = new TransactionEntity(
      generateTransactionEntityId(
        event.params.txReference,
        event.params.sender,
        event.params.recipient
      )
    );

  txEntity.recipientUserName = event.params.recipientUserName;
  txEntity.status = event.params.status;

  txEntity.claimTime = BigInt.zero();
  txEntity.reclaimTime = event.block.timestamp;

  txEntity.save();
}

function generateTransactionEntityId(
  txRef: Bytes,
  sender: Address,
  recipient: Address
): string {
  return txRef.toHexString() + sender.toHexString() + recipient.toHexString();
}

function generateBeneficiaryID(
  txHash: Bytes,
  sender: Address,
  beneficiary: Address
): string {
  return (
    txHash.toHexString() + sender.toHexString() + beneficiary.toHexString()
  );
}
