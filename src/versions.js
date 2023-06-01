const struct = require("awestruct");
const t = struct.types;

// Increasing variables to represent an ENUM
const GV_None = 1;
const GV_TEST = 2;
const GV_MIK = 3;
const GV_DAVE = 4;
const GV_MATT = 5;
const GV_AoEB = 6;
const GV_AoE = 7;
const GV_RoR = 8;
const GV_Tapsa = 9;
const GV_T2 = 10;
const GV_T3 = 11;
const GV_T4 = 12;
const GV_T5 = 13;
const GV_T6 = 14;
const GV_T7 = 15;
const GV_T8 = 16;
const GV_AoKE3 = 17;
const GV_AoKA = 18;
const GV_AoKB = 19;
const GV_AoK = 21;
const GV_TC = 22;
const GV_TCV = 23;
const GV_Cysion = 24;
const GV_C2 = 25;
const GV_C3 = 26;
const GV_C4 = 27;
const GV_CK = 28;
const GV_C5 = 29;
const GV_C6 = 30;
const GV_C7 = 31;
const GV_C8 = 32;
const GV_C9 = 33;
const GV_C10 = 34;
const GV_C11 = 35;
const GV_C12 = 36;
const GV_C13 = 37;
const GV_C14 = 38;
const GV_C15 = 39;
const GV_C16 = 40;
const GV_C17 = 41;
const GV_C18 = 42;
const GV_C19 = 43;
const GV_C20 = 44;
const GV_SWGB = 45;
const GV_CC = 46;
const GV_CCV = 47;
const GV_CCV2 = 48;


const GV_LatestDE2 = GV_C20;

const VERSIONS = {
  GV_None: 0, //Game version not set
  GV_TEST, // ?
  GV_MIK, // ?
  GV_DAVE, // ?
  GV_MATT, // ?
  GV_AoEB, // 7.04 - 7.11
  GV_AoE, // 7.2
  GV_RoR, // 7.24
  GV_Tapsa, GV_T2, GV_T3, GV_T4, GV_T5, GV_T6, GV_T7, GV_T8, // 10.1 - 10.8
  GV_AoKE3, // 9.36
  GV_AoKA, // 10.19
  GV_AoKB, // 11.05
  GV_AoK, // 11.5
  GV_TC, // 11.76
  GV_TCV, // Terrain patch
  GV_Cysion, // 12.0
  GV_C2, GV_C3, GV_C4, GV_CK, GV_C5, GV_C6, GV_C7, GV_C8, GV_C9, GV_C10, GV_C11, GV_C12, GV_C13, GV_C14, // 12.52 - 12.94
  GV_C15, // 13.11
  GV_C16, // 20.01
  GV_C17, // 20.14
  GV_C18, // 25.27
  GV_C19, GV_C20, // 26.23 - 40.3
  GV_SWGB, // 1.0
  GV_CC, // 1.1
  GV_CCV, // Terrain patch
  GV_CCV2 // Terrain patch + tech tree patch
}

const VER_MAP = {
  "VER 4.5": GV_T8,
  "VER 7.1": GV_C14,
  "VER 7.2": GV_C15,
  "VER 7.3": GV_C16,
  "VER 7.4": GV_C17,
  "VER 7.5": GV_C18,
  "VER 7.6": GV_C19,
  "VER 7.7": GV_C20,
}

const ifVersion = (test, consequent) =>
  t.if(s => {
    let parent = s;
    while (parent.$parent) parent = parent.$parent;
    const { fileVersion } = parent;

    return test(VER_MAP[fileVersion]);
  }, consequent);

module.exports = {
  VER_MAP,
  ifVersion,
  VERSIONS,
  GV_None, 
  GV_TEST, 
  GV_MIK, 
  GV_DAVE, 
  GV_MATT, 
  GV_AoEB, 
  GV_AoE, 
  GV_RoR, 
  GV_Tapsa, 
  GV_T2, 
  GV_T3, 
  GV_T4, 
  GV_T5, 
  GV_T6, 
  GV_T7, 
  GV_T8, 
  GV_AoKE3, 
  GV_AoKA, 
  GV_AoKB, 
  GV_AoK, 
  GV_TC, 
  GV_TCV, 
  GV_Cysion, 
  GV_C2, 
  GV_C3, 
  GV_C4, 
  GV_CK, 
  GV_C5, 
  GV_C6, 
  GV_C7, 
  GV_C8, 
  GV_C9, 
  GV_C10, 
  GV_C11, 
  GV_C12, 
  GV_C13, 
  GV_C14, 
  GV_C15, 
  GV_C16, 
  GV_C17, 
  GV_C18, 
  GV_C19, 
  GV_C20, 
  GV_SWGB, 
  GV_CC, 
  GV_CCV, 
  GV_CCV2, 
  GV_LatestDE2,
}