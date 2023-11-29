# project_Citrine_web  
  
## Nodeバージョン  
現在は仮置きでv18.13.0を使用中。（Amplifyを想定していたため）  
App runnner使うならもっと新しいのも使えるかも？  
  
## Node管理ツール  
voltaを使用中。インストールは下記コマンドで行う。  
curl https://get.volta.sh | bash  
  
## 開発環境の構築  
・.envファイルを配置  
  
・依存パッケージをインストール  
npm ci  
  
・開発サーバー起動  
npm run dev  
  
・ESLint実行  
npm run lint  
  
・テスト実行  
npm run test  
  
・storybook起動  
npm run storybook  
  