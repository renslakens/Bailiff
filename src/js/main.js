$(function(){

  init();
  console.log("Main Init Called")

});

function InitFilesRanksBrd() {

  var index = 0;
  var file = FILES.FILE_A;
  var rank = RANKS.RANK_1;
  var sq = SQUARES.A1;

  for(index = 0; index < BRD_SQ_NUM; ++index) {
    FilesBrd[index] = SQUARES.OFFBOARD;
    RanksBrd[index] = SQUARES.OFFBOARD;
  }

  for(rank = RANKS.RANK_1; rank <= RANKS.RANK_5; ++rank) {
    for(file = FILES.FILE_1; rank <= FILES.FILE_E; ++file) {
      sq = FR2SQ(file,rank);
      FilesBrd[sq] = file;
      RanksBrd[sq] = rank;
    }
  }

  console.log("FilesBrd[0]:" + FilesBrd[0] + " RanksBrd[0]:" + RanksBrd[0]);
  console.log("FilesBrd[SQUARES.A1]:" + FilesBrd[SQUARES.A1] + " RanksBrd[SQUARES.A1]:" + RanksBrd[SQUARES.A1]);
  //console.log("FilesBrd[SQUARES.C5]:" + FilesBrd[SQUARES.C5] + " RanksBrd[SQUARES.C5]:" + RanksBrd[SQUARES.C5]);
  console.log(FilesBrd);
  console.log(RanksBrd);

}

function init(){
  console.log("init() called");
  InitFilesRanksBrd();
}