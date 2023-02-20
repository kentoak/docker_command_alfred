#!/usr/bin/env node
import alfy from 'alfy';

//argはエンターキーを押した時にでるやつ


const command_=`
docker images コンテナイメージの確認
docker rmi ＜IMAGE ID＞ コンテナイメージの削除
docker history　＜IMAGE ID＞ コンテナイメージの履歴表示
docker build -t ＜REPOSITORY[:TAG]＞ . コンテナイメージのビルド
docker logs　＜CONTAINER ID＞ コンテナのログ表示
docker top ＜CONTAINER ID＞ コンテナのプロセス表示
docker search　＜イメージ名＞ Dockerイメージ検索
docker pull ＜イメージ名＞ Dockerイメージダウンロード
docker push ＜レジストリの場所/リポジトリ名＞[:バージョン] Dockerイメージアップロード
docker logs ＜CONTAINER ID＞ コンテナログ出力
docker network create --subnet ＜サブネットマスク＞　＜ネットワークの名前＞ ネットワークの作成
docker network ls ネットワークの一覧表示
docker network rm ＜ネットワークの名前＞ ネットワークの削除
docker network connect ＜ネットワークの名前＞　＜CONTAINER ID＞ ネットワークにコンテナを接続
docker network connect --ip ＜IPアドレス＞　＜ネットワークの名前＞　＜CONTAINER ID＞ ネットワークにコンテナを接続
docker network disconnect ＜ネットワークの名前＞　＜CONTAINER ID＞ ネットワークからコンテナを切断
docker network inspect ＜ネットワークの名前＞ ネットワークの詳細表示
docker network prune 未使用のネットワークをすべて削除
docker volume create ＜ボリューム名＞ ボリュームの作成
docker volume rm ＜ボリューム名＞ ボリュームの削除
docker volume ls ボリュームの一覧表示
docker volume prune 未使用のボリュームをすべて削除
docker volume inspect ＜ボリューム名＞ ボリュームの詳細表示
man docker HELP関連
man docker run HELP関連
man docker container HELP関連
`

// 改行で配列を作る
const lines = command_.split('\n');
let words = [];
for (let i = 0; i < lines.length; i++) {
  let line = lines[i];
  let line_words = line.split(/\s+/);
  let line_words_with_space = [];
  if (line_words.length > 2) {
    let tmp = [line_words.slice(0, -1).join(" "), line_words.slice(-1)[0]];
    line_words_with_space.push(tmp);
  } else {
    line_words_with_space.push(line_words);
  }
  words.push(line_words_with_space[0]);
}

// 正規表現を使って空白で配列の要素にする
//const commands = lines.map(line => line.split(/\s+/));
//const commands = lines.map(line => line.split(/\s+/));
//const tmp = commands.slice(1, -1)
const tmp = words.slice(1, -1)
var obj=[]

for(var i=0;i<tmp.length;i++){
  obj.push({
    title: tmp[i][0],
    subtitle: tmp[i][1],
    icon: {path: './img/main01.jpg'},
    arg: tmp[i][0]});
};

const keyword = alfy.input;
if (process.argv.length==0){
  alfy.output(obj);
}else if (process.argv.length==3){
  const itemss = alfy.inputMatches(obj,'title');
  alfy.output(itemss);
}else{
  console.log("bashcom {query}")
}

export {obj as obj};
