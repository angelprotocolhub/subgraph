import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  AddedBeneficiary,
  Angel__AccountCreated,
  AssetClaimed,
  AssetReclaimed,
  AssetSent
} from "../generated/Angel/Angel"

export function createAddedBeneficiaryEvent(
  sender: Address,
  beneficiary: Address
): AddedBeneficiary {
  let addedBeneficiaryEvent = changetype<AddedBeneficiary>(newMockEvent())

  addedBeneficiaryEvent.parameters = new Array()

  addedBeneficiaryEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  addedBeneficiaryEvent.parameters.push(
    new ethereum.EventParam(
      "beneficiary",
      ethereum.Value.fromAddress(beneficiary)
    )
  )

  return addedBeneficiaryEvent
}

export function createAngel__AccountCreatedEvent(
  user: Address,
  profileImage: string
): Angel__AccountCreated {
  let angelAccountCreatedEvent = changetype<Angel__AccountCreated>(
    newMockEvent()
  )

  angelAccountCreatedEvent.parameters = new Array()

  angelAccountCreatedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  angelAccountCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "profileImage",
      ethereum.Value.fromString(profileImage)
    )
  )

  return angelAccountCreatedEvent
}

export function createAssetClaimedEvent(
  sender: Address,
  senderUserName: string,
  recipient: Address,
  recipientUserName: string,
  asset: Address,
  amount: BigInt,
  status: i32,
  txReference: Bytes,
  claimTime: BigInt,
  txType: boolean
): AssetClaimed {
  let assetClaimedEvent = changetype<AssetClaimed>(newMockEvent())

  assetClaimedEvent.parameters = new Array()

  assetClaimedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  assetClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "senderUserName",
      ethereum.Value.fromString(senderUserName)
    )
  )
  assetClaimedEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  assetClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "recipientUserName",
      ethereum.Value.fromString(recipientUserName)
    )
  )
  assetClaimedEvent.parameters.push(
    new ethereum.EventParam("asset", ethereum.Value.fromAddress(asset))
  )
  assetClaimedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  assetClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "status",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(status))
    )
  )
  assetClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "txReference",
      ethereum.Value.fromFixedBytes(txReference)
    )
  )
  assetClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "claimTime",
      ethereum.Value.fromUnsignedBigInt(claimTime)
    )
  )
  assetClaimedEvent.parameters.push(
    new ethereum.EventParam("txType", ethereum.Value.fromBoolean(txType))
  )

  return assetClaimedEvent
}

export function createAssetReclaimedEvent(
  sender: Address,
  senderUserName: string,
  recipient: Address,
  recipientUserName: string,
  asset: Address,
  amount: BigInt,
  status: i32,
  txReference: Bytes,
  reclaimTime: BigInt,
  txType: boolean
): AssetReclaimed {
  let assetReclaimedEvent = changetype<AssetReclaimed>(newMockEvent())

  assetReclaimedEvent.parameters = new Array()

  assetReclaimedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  assetReclaimedEvent.parameters.push(
    new ethereum.EventParam(
      "senderUserName",
      ethereum.Value.fromString(senderUserName)
    )
  )
  assetReclaimedEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  assetReclaimedEvent.parameters.push(
    new ethereum.EventParam(
      "recipientUserName",
      ethereum.Value.fromString(recipientUserName)
    )
  )
  assetReclaimedEvent.parameters.push(
    new ethereum.EventParam("asset", ethereum.Value.fromAddress(asset))
  )
  assetReclaimedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  assetReclaimedEvent.parameters.push(
    new ethereum.EventParam(
      "status",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(status))
    )
  )
  assetReclaimedEvent.parameters.push(
    new ethereum.EventParam(
      "txReference",
      ethereum.Value.fromFixedBytes(txReference)
    )
  )
  assetReclaimedEvent.parameters.push(
    new ethereum.EventParam(
      "reclaimTime",
      ethereum.Value.fromUnsignedBigInt(reclaimTime)
    )
  )
  assetReclaimedEvent.parameters.push(
    new ethereum.EventParam("txType", ethereum.Value.fromBoolean(txType))
  )

  return assetReclaimedEvent
}

export function createAssetSentEvent(
  sender: Address,
  senderUserName: string,
  recipient: Address,
  recipientUserName: string,
  asset: Address,
  amount: BigInt,
  narration: string,
  status: i32,
  txReference: Bytes,
  time: BigInt,
  txType: boolean
): AssetSent {
  let assetSentEvent = changetype<AssetSent>(newMockEvent())

  assetSentEvent.parameters = new Array()

  assetSentEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  assetSentEvent.parameters.push(
    new ethereum.EventParam(
      "senderUserName",
      ethereum.Value.fromString(senderUserName)
    )
  )
  assetSentEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  assetSentEvent.parameters.push(
    new ethereum.EventParam(
      "recipientUserName",
      ethereum.Value.fromString(recipientUserName)
    )
  )
  assetSentEvent.parameters.push(
    new ethereum.EventParam("asset", ethereum.Value.fromAddress(asset))
  )
  assetSentEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  assetSentEvent.parameters.push(
    new ethereum.EventParam("narration", ethereum.Value.fromString(narration))
  )
  assetSentEvent.parameters.push(
    new ethereum.EventParam(
      "status",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(status))
    )
  )
  assetSentEvent.parameters.push(
    new ethereum.EventParam(
      "txReference",
      ethereum.Value.fromFixedBytes(txReference)
    )
  )
  assetSentEvent.parameters.push(
    new ethereum.EventParam("time", ethereum.Value.fromUnsignedBigInt(time))
  )
  assetSentEvent.parameters.push(
    new ethereum.EventParam("txType", ethereum.Value.fromBoolean(txType))
  )

  return assetSentEvent
}
