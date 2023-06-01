const struct = require("awestruct");
const DebugString = require("./string");
const { GV_C20, GV_LatestDE2, ifVersion, GV_C19 } = require("./versions");
const t = struct.types;

const ResourceStorage = struct([
  ["type", t.int16],
  ["amount", t.float],
  ["usedMode", t.int8]
]);

const DamageGraphic = struct([
  ["graphicId", t.int16],
  ["damagePercent", t.int16],
  ["flag", t.uint8]
]);

const StaticObject = struct([
  ["id", t.int16],
  ["languageDllName", t.int32],
  ["languageDllCreation", t.int32],
  ["class", t.int16],
  ["standingGraphic0", t.int16],
  ["standingGraphic1", t.int16],
  ["dyingGraphic", t.int16],
  ["undeadGraphic", t.int16],
  ["undeadMode", t.int8],
  ["hitPoints", t.int16],
  ["lineOfSight", t.float],
  ["garrisonCapacity", t.uint8],
  [
    "radius",
    struct([["x", t.float], ["y", t.float], ["z", t.float]])
  ],
  ["trainSound", t.int16],
  ["damageSound", t.int16], // not in AOE1
  ["deadUnitId", t.int16],
  ["bloodUnitId", t.int16],
  ["sortNumber", t.int8], // placementMode
  ["canBeBuiltOn", t.int8],
  ["iconId", t.int16],
  ["hiddenInEditor", t.int8],
  ["oldPortraitIconId", t.int16],
  ["enabled", t.bool],
  ["disabled", t.bool],
  ["placementSideTerrain0", t.int16],
  ["placementSideTerrain1", t.int16],
  ["placementTerrain0", t.int16],
  ["placementTerrain1", t.int16],
  [
    "clearanceSize",
    struct([
      ["x", t.float],
      ["y", t.float]
    ])
  ],
  ["hillMode", t.int8], // buildingMode
  ["visibleInFog", t.int8],
  ["terrainRestriction", t.int16],
  ["flyMode", t.uint8],
  ["resourceCapacity", t.int16],
  ["resourceDecay", t.float],
  ["blastDefenseLevel", t.uint8],
  ["combatLevel", t.int8],
  ["interactionMode", t.int8],
  ["minimapMode", t.int8],
  ["interfaceKind", t.int8], // unitLevel
  ["multipleAttributeMode", t.float], // attackReaction
  ["minimapColor", t.int8],
  ["languageDllHelp", t.int32],
  ["languageDllHotkeyText", t.int32],
  ["hotkeyId", t.int32],
  ["recycleable", t.int8],
  ["enableAutoGather", t.int8],
  ["doppelgangerOnDeath", t.int8],
  ["resourceGatherDrop", t.int8],
  ["occlusionMask", t.uint8],
  ["obstructionType", t.uint8],
  ["obstructionClass", t.uint8],
  ["trait", t.uint8], // > GV_TC
  ["civilization", t.uint8], // > GV_TC
  ["nothing", t.int16], // > GV_TC
  // ["flags", t.uint32],

  ["selectionEffect", t.uint8],
  ["editorSelectionColour", t.uint8],
  [
    "outlineRadius",
    struct([
      ["x", t.float],
      ["y", t.float],
      ["z", t.float]
    ])
  ],
  ["scenarioTrigger1", t.uint32],
  ["scenarioTrigger2", t.uint32],
  ["resourceStorage", t.array(3, ResourceStorage)],
  ["damageGraphics", t.dynarray(t.uint8, DamageGraphic)],
  ["selectionSound", t.int16],
  ["dyingSound", t.int16],
  ["wwiseTrainSoundId", t.uint32],
  ["wwiseDamageSoundId", t.uint32],
  ["wwiseSelectionSoundId", t.uint32],
  ["wwiseDyingSoundId", t.uint32],
  ["oldAttackReaction", t.uint8], // oldAttackMode
  ["convertTerrain", t.uint8],
  ["name", DebugString],
  ["copyId", t.int16],
  ["baseId", t.int16]
]);

const AnimatedObject = struct([["speed", t.float]]);

const DoppelgangerObject = struct([]);

const MovingObject = struct([
  // AnimatedObject,
  ["walkingGraphics0", t.int16],
  ["walkingGraphics1", t.int16],
  ["rotationSpeed", t.float], // turnSpeed
  ["oldSizeClass", t.int8],
  ["trackingUnit", t.int16], // trailObjectId
  ["trackingUnitMode", t.uint8], // trailOptions
  ["trackingUnitDensity", t.float], // trailSpacing
  ["oldMoveAlgorithm", t.int8],
  ["turnRadius", t.float],
  ["turnRadiusSpeed", t.float],
  ["maxYawPerSecondMoving", t.float],
  ["stationaryYawRevolutionTime", t.float],
  ["maxYawPerSecondStationary", t.float],
  ["minCollisionSizeMultiplier", t.float], // gv <= GV_LatestDE2 && gv >= GV_C14
]);


const ObjectCommand = struct([
  ["taskType", t.int16], // commandUsed
  ["id", t.int16],
  ["isDefault", t.uint8],
  ["actionType", t.int16], // type
  ["classId", t.int16],
  ["unitID", t.int16], // objectId
  ["terrainId", t.int16],
  ["resourceIn", t.int16],
  ["resourceMultiplier", t.int16],
  ["resourceOut", t.int16],
  ["resourceUnused", t.int16],
  ["workValue1", t.float],
  ["workValue2", t.float],
  ["workRange", t.float],
  ["autoSearchTargets", t.int8],
  ["searchWaitTime", t.float],
  ["enableTargeting", t.int8],
  ["combatLevelFlag", t.int8],
  ["gatherType", t.int16],
  ["workMode2", t.int16],
  ["targetDiplomacy", t.int8], // ownerType
  ["carryCheck", t.int8],
  ["pickForConstruction", t.int8], // stateBuild
  ["moveSpriteId", t.int16],
  ["proceedSpriteId", t.int16],
  ["workSpriteId", t.int16],
  ["carrySpriteId", t.int16],
  ["resourceGatherSoundId", t.int16],
  ["resourceDepositSoundId", t.int16],
  ["wwiseResourceGatherSoundId", t.uint32],
  ["wwiseResourceDepositSoundId", t.uint32]
]);

const ActionObject = struct([
  // MovingObject,
  ["defaultTaskId", t.int16],
  ["searchRadius", t.float],
  ["workRate", t.float],
  ["dropSite0", t.int16],
  ["dropSite1", t.int16],
  ["dropSite2", t.int16], // >= GV_C15 && <= latestDE2
  ["taskSwapGroup", t.uint8], // taskByGroup
  ["attackSound", t.int16], // commandSoundId
  ["moveSound", t.int16], // stopSoundId
  ["wwiseCommandSoundId", t.uint32],
  ["wwiseStopSoundId", t.uint32],
  ["runPattern", t.uint8],
  // ["taskList", t.dynarray(t.uint16, ObjectCommand)],
  ["mytaskListCount", t.uint16],
  ["taskList", t.array('mytaskListCount', ObjectCommand)],
  // ObjectCommands here for AOE1
]);

const HitType = struct([
  ["class", t.int16],  // type
  ["amount", t.int16]
]);

const BaseCombatObject = struct([
  // ActionObject,
  ["baseArmor", t.int16], // defaultArmor
  ["attacksCount", t.uint16],
  ["attacks", t.array('attacksCount', HitType)],
  // ["attacks", t.dynarray(t.uint16, HitType)],
  ["armorsCount", t.uint16],
  ["armors", t.array('armorsCount', HitType)],
  // ["armors", t.dynarray(t.uint16, HitType)],
  ["defenseTerrainBonus", t.int16], // boundaryId
  ["bonusDamageResistance", t.float], // gv <= GV_LatestDE2 && gv >= GV_C16
  ["weaponRangeMax", t.float],
  ["blastRange", t.float],
  ["ReloadTime", t.float], // attackSpeed
  ["projectileObjectId", t.int16],
  ["accuracyPercent", t.int16], // baseHitChance
  ["breakOffCombat", t.int8],
  ["frameDelay", t.int16],
  [
    "weaponOffset",
    struct([
      ["x", t.float],
      ["y", t.float],
      ["z", t.float]
    ])
  ],
  ["blastAttackLevel", t.uint8],
  ["weaponRangeMin", t.float],
  ["accuracyDispersion", t.float],
  ["attackGraphic", t.int16], // fightSpriteId
  ["meleeArmorDisplayed", t.int16],
  ["attackDisplayed", t.int16],
  ["rangeDisplayed", t.float],
  ["reloadTimeDisplayed", t.float],

  ifVersion(
    v => v >= GV_C20 && v <= GV_LatestDE2,
    struct([["blastDamage", t.float]])
  )
]);

const MissileObject = struct([
  // BaseCombatObject,
  ["projectileType", t.uint8],
  ["smartMode", t.uint8],
  ["hitMode", t.uint8], // dropAnimationMode
  ["vanishMode", t.uint8], // penetrationMode
  ["areaOfEffectSpecial", t.uint8],
  ["projectileArc", t.float]
]);

const ResourceCost = struct([
  ["type", t.int16],
  ["amount", t.int16],
  ["enabled", t.int16]
]);

const CombatObject = struct([
  // BaseCombatObject,
  ["resourceCost", t.array(3, ResourceCost)],
  ["creationTime", t.int16],
  ["creationLocationId", t.int16],
  ["creationButtonId", t.uint8],
  ["rearAttackModifier", t.float],
  ["flankAttackModifier", t.float],
  ["creatableType", t.uint8],
  ["heroMode", t.uint8],
  ["garrisonGraphic", t.int32],
  ["spawningGraphic", t.int16],
  ["upgradeGraphic", t.int16],
  ["heroGlowGraphic", t.int16],
  ["maxCharge", t.float], 
  ["rechargeRate", t.float],
  ["chargeEvent", t.int16],
  ["chargeType", t.int16],
  ifVersion(
    v => GV_C19 <= v && v <= GV_LatestDE2,
    struct([
      ["minConversionTimeMod", t.float], 
      ["maxConversionTimeMod", t.float],
      ["conversionChanceMod", t.float],
    ])
  ),
  ["totalProjectiles", t.float], // volleyFireAmount
  ["maxTotalProjectiles", t.uint8], // maxAttacksInVolley
  ["volleyXSpread", t.float], // ProjectileSpawningArea
  ["volleyYSpread", t.float], // ProjectileSpawningArea
  ["volleyStartSpreadAdjustment", t.float], // ProjectileSpawningArea
  ["volleyMissileId", t.int32],
  ["specialGraphicid", t.int32],
  ["specialAbility", t.uint8], // specialActivation
  ["pierceArmorDisplayed", t.int16]
]);

const BuildingAnnex = struct([
  ["objectId", t.int16],
  ["misplaced0", t.float],
  ["misplaced1", t.float]
]);

const BuildingObject = struct([
  // CombatObject,
  ["constructionGraphicId", t.int16],
  ["snowGraphicId", t.int16],
  ["destructionGraphicId", t.int16],
  ["destructionRubbleGraphicId", t.int16],
  ["researchingGraphicId", t.int16],
  ["researchCompletedGraphicId", t.int16],
  ["adjacentMode", t.int8],
  ["graphicsAngle", t.int16],
  ["disappearsWhenBuilt", t.int8],
  ["stackUnitId", t.int16],
  ["foundationTerrainId", t.int16],
  ["oldOverlayId", t.int16],
  ["techID", t.int16], // researchId
  ["canBurn", t.bool],
  ["annexes", t.array(4, BuildingAnnex)],
  ["headUnit", t.int16], // headObjectId
  ["transformUnit", t.int16], // transformObjectId
  ["transformSound", t.int16],
  ["constructionSoundId", t.int16],
  ["wwiseTransformSoundId", t.uint32],
  ["wwiseConstructionSoundId", t.uint32],
  ["garrisonType", t.uint8],
  ["garrisonHealRate", t.float],
  ["garrisonRepairRate", t.float],
  ["pileUnit", t.int16], // salvageObjectId
  ["lootingTable", t.array(6, t.int8)] // salvageAttributes
]);

const TreeObject = struct([StaticObject]);

const TriageObject = struct([
  ["type", t.uint8],
  StaticObject,
  // t.if(s => s.type >= 10, StaticObject), // UT_EyeCandy
  // t.if(s => s.type >= 15, TreeObject), // UT_Trees
  t.if(s => s.type >= 20 && s.type != 90, AnimatedObject), // UT_Flag
  // t.if(s => s.type >= 25 && s.type != 90, DoppelgangerObject), // UT_25
  t.if(s => s.type >= 30 && s.type != 90, MovingObject), // UT_Dead_Fish
  t.if(s => s.type >= 40 && s.type != 90, ActionObject), // UT_Bird
  t.if(s => s.type >= 50 && s.type != 90, BaseCombatObject), // UT_Combatant
  t.if(s => s.type == 60, MissileObject), // UT_Projectile
  t.if(s => s.type >= 70 && s.type != 90, CombatObject), // UT_Creatable
  t.if(s => s.type == 80, BuildingObject), // UT_Building
  // t.if(s => s.type >= 9, TreeObject), // UT_AoeTrees
  // t.if(s => {console.warn("Unkonwn type", s.type); return false}, TreeObject) // UT_AoeTrees
]);

module.exports = {
  ResourceStorage,
  DamageGraphic,
  StaticObject,
  AnimatedObject,
  DoppelgangerObject,
  MovingObject,
  ActionObject,
  HitType,
  BaseCombatObject,
  MissileObject,
  ResourceCost,
  CombatObject,
  ObjectCommand,
  BuildingAnnex,
  BuildingObject,
  TreeObject,
  TriageObject
};
