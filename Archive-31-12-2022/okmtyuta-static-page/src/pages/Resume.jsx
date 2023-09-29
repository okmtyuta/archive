import { SingleFrame } from "../okmtyuta-react-lib/components/atoms/prototypes/frames/SingleFrame";
import { Link } from "../okmtyuta-react-lib/components/atoms/prototypes/links/Link";
import { NostFooter } from "../okmtyuta-react-lib/components/molecules/nost/NostFooter"
import { NostHeader } from "../okmtyuta-react-lib/components/molecules/nost/NostHeader"
import { Body } from "../okmtyuta-react-lib/components/parts/body"
import { Main } from "../okmtyuta-react-lib/components/parts/main";

import "../okmtyuta-react-lib/css/resume/resume.css";

export const Resume = () => {
  return (

    <Body>
      <NostHeader />

      <Main>
        
        <SingleFrame>

          <div className="rsm-headline">
            Experience
          </div>

          <ul className="rsm-list">
            <li className="rsm-list-item rsm-list-item-bottom-margin">
              <div className="rsm-list-item-headline">
                <span className="rsm-list-item-headline-left">Engineer - Net Protections Inc.</span>
                <span className="rsm-list-item-headline-center"><hr className="rsm-list-item-headline-leader" /></span>
                <span className="rsm-list-item-headline-right">2022年10月 - 現在</span>
              </div>
              <p className="rsm-list-item-content">
                長期インターンとして所属している。現在はポストプライシングサービスの設計、開発および運用をおこなっている。
              </p>
            </li>
            
            <li className="rsm-list-item rsm-list-item-bottom-margin">
              <div className="rsm-list-item-headline">
                <span className="rsm-list-item-headline-left">Engineer - Rakuten Group Inc.</span>
                <span className="rsm-list-item-headline-center"><hr className="rsm-list-item-headline-leader" /></span>
                <span className="rsm-list-item-headline-right">2022年8月</span>
              </div>
              <p className="rsm-list-item-content">
              5日間の短期インターンに参加し、アプリケーションの企画から開発、プレゼンまでを5人のグループで行なった。私は主にフロントエンドの開発に参加したが、バックエンドの開発にも一部参加して助言などをおこなった。本インターンを通して、エンジニアの間でコミュニケーションをとって開発を行うことのおもしろさと難しさを知った。同時に、多くの技術領域に精通して、技術スタックが違うエンジニア間のコミュニケーションを助けられるような存在になりたいと感じた。
              </p>
            </li>
            
            <li className="rsm-list-item rsm-list-item-bottom-margin">
              <div className="rsm-list-item-headline">
                <span className="rsm-list-item-headline-left">Personal Projects</span>
                <span className="rsm-list-item-headline-center"><hr className="rsm-list-item-headline-leader" /></span>
                <span className="rsm-list-item-headline-right">2020年3月 - 現在</span>
              </div>
              <p className="rsm-list-item-content">
              ブログ機能を中心としたウェブアプリケーションの開発を行っている。開発初期は単純で静的なページであったが、現在はDjangoとReactを用いた開発を行っている。アプリは自身でレンタルしたサーバーにデータベースを立てて運用している。開発を始めた目的が、自身のもつ知識や自信の作成物を広く公開することであり、現在までに基本的なCRUD機能、コメント機能、メールやSNSによる更新情報の配信機能などを開発してきた。今後は、より洗練されたUI/UXデザイン、AWSやGCPへのインフラの移行、WSYWIGの実装などに取り組みたいと考えている。
              </p>
            </li>
          </ul>

          <div className="rsm-headline">
            Education
          </div>

          <ul className="rsm-list">
            <li className="rsm-list-item rsm-list-item-bottom-margin">
              <div className="rsm-list-item-headline">
                <span className="rsm-list-item-headline-left">東京大学理学部数学科</span>
                <span className="rsm-list-item-headline-center"><hr className="rsm-list-item-headline-leader" /></span>
                <span className="rsm-list-item-headline-right">2022年4月 - 現在</span>
              </div>
              <p className="rsm-list-item-content">
                2019年に高校卒業後、2020年に東京大学教養学部理科二類に入学した。その後は理学部数学科に進学し、数学の勉強をしている。数学の専門としては応用数学を予定している。大学卒業後は情報系の大学院に進学予定である。
              </p>
            </li>
          </ul>

          <div className="rsm-headline">
            Skills
          </div>

          <ul className="rsm-list">
            <li className="rsm-list-item">
              <div className="rsm-list-item-headline">
                <span className="rsm-list-item-headline-left">プログラミング言語</span>
              </div>
              <p className="rsm-list-item-content">
                JavaScript / Python3 / Rust / Swift / C++ / C# / HTML & CSS
              </p>
            </li>
            <li className="rsm-list-item">
              <div className="rsm-list-item-headline">
                <span className="rsm-list-item-headline-left">ライブラリー & フレームワーク</span>
              </div>
              <p className="rsm-list-item-content">
                React / Next / Django / Ruby on Rails / jQuery / LaTex
              </p>
            </li>
            <li className="rsm-list-item">
              <div className="rsm-list-item-headline">
                <span className="rsm-list-item-headline-left">ツール</span>
              </div>
              <p className="rsm-list-item-content">
                Photoshop / Illustrator / InDesign / Microsoft Office / Git
              </p>
            </li>
            <li className="rsm-list-item">
              <div className="rsm-list-item-headline">
                <span className="rsm-list-item-headline-left">その他</span>
              </div>
              <p className="rsm-list-item-content rsm-list-item-bottom-margin">
                Google Cloud PlatformのApp Engineでアプリケーションの運用経験あり。CentOSの運用経験あり。
              </p>
            </li>
          </ul>


          <div className="rsm-headline">
            Contact & Links
          </div>

          <ul className="rsm-list">
            <li className="rsm-list-item">
              <div className="rsm-list-item-headline">
                <span className="rsm-list-item-headline-left">メール</span>
              </div>
              <p className="rsm-list-item-content">
                okmtyuta[at]gmail.com
              </p>
            </li>
            <li className="rsm-list-item">
              <div className="rsm-list-item-headline">
                <span className="rsm-list-item-headline-left">ホームページ</span>
              </div>
              <p className="rsm-list-item-content">
                <Link href="https://fromoshima.jp">https://fromoshima.jp</Link>
              </p>
            </li>
            <li className="rsm-list-item">
              <div className="rsm-list-item-headline">
                <span className="rsm-list-item-headline-left">Twitter</span>
              </div>
              <p className="rsm-list-item-content">
                <Link href="https://twitter.com/okmtyuta">@okmtyuta</Link>
              </p>
            </li>
            <li className="rsm-list-item">
              <div className="rsm-list-item-headline">
                <span className="rsm-list-item-headline-left">GitHub</span>
              </div>
              <p className="rsm-list-item-content rsm-list-item-bottom-margin">
                <Link href="https://github.com/okmtyuta">okmtyuta</Link>
              </p>
            </li>
          </ul>

        </SingleFrame>
        
      </Main>

      <NostFooter />
    </Body>
  
  )
}