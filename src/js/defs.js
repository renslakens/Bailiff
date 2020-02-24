var PIECES = { EMPTY : 0, wP : 1, bP : 2, B : 3 };

var BRD_SQ_NUM = 49;

var FILES = { FILE_A:0, FILE_B:1, FILE_C:2, FILE_D:3, FILE_E:4, FILE_NONE:5 };
var RANKS = { RANK_1:0, RANK_2:1, RANK_3:2, RANK_4:3, RANK_5:4, RANK_NONE:5 };

var COLOURS = { WHITE:0, BLACK:1, BOTH:2 };

var SQUARES = {
    A1:8, B1:9, C1:10, D1:11, E1:12,
    C3:24,
    A5:36, B5:37, C5:38, D5:39, E5:40,
    NO_SQ:41, OFFBOARD:42
};

var BOOL = { FALSE:0, TRUE:1 };

var FilesBrd = new Array(BRD_SQ_NUM);
var RanksBrd = new Array(BRD_SQ_NUM);

function FR2SQ(f,r){
    return((8+(f))+((r)*7));
}