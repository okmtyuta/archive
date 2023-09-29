import { colors, fontFamilies } from "../../okmtyuta-react-lib/config";

import { Article } from "../../okmtyuta-react-lib/components/molecules/articles/Article";
import { Paragraph } from "../../okmtyuta-react-lib/components/atoms/prototypes/paragraph/Paragraph";
import { Body } from "../../okmtyuta-react-lib/components/parts/body";
import { NostHeader } from "../../okmtyuta-react-lib/components/molecules/nost/NostHeader";
import { NostFooter } from "../../okmtyuta-react-lib/components/molecules/nost/NostFooter";
import { Headline } from "../../okmtyuta-react-lib/components/atoms/prototypes/headlines/Headline";
import { Katexes } from "../../okmtyuta-react-lib/components/atoms/katex/Katexes";
import { Katex } from "../../okmtyuta-react-lib/components/atoms/katex/Katex";

export const Ex2022 = () => {
  return (
    <Body>
      <NostHeader />

        <Article
          datePosted="28th October 2022"
          title="東京大学大学院創造情報学専攻の入試問題を解説したかった話"
          description="創造情報学専攻2022の入試問題を解説します。"
          tags={["入試問題解説", "創造情報学専攻"]}
          author="okmtyuta"
          contents={[
            {
              headline: "初めに",
              content: (
                <div>
                  <Headline>
                    はじめに
                  </Headline>
                  <Paragraph>
                    ふーん
                  </Paragraph>
                  <Headline>
                    第1問
                  </Headline>
                  <Paragraph fontFamily={fontFamilies.sansSerif}>
                    (1-1)これは手を動かすだけの簡単な問題です。まずStep 0で<Katex>x_0 = x_1 = x_2 = 0</Katex>と初期化されていることに注意してください。次にStep 1を5回繰り返します。
                  </Paragraph>
                  <Paragraph fontFamily={fontFamilies.sansSerif}>
                    （1回目）<Katex>i = 1, 2, 3</Katex>に対して、<Katex>d_i(x_i + 1)</Katex>は次のようになります。
                    
                  </Paragraph>
                  <Katexes>
                    {String.raw`(1)これは手をうごかすだけのかん$\dint a + b\ dx$`}
                  </Katexes>
                  <Headline>
                    はじめに
                  </Headline>
                  <Paragraph>
                    ふーん
                  </Paragraph>
                  <Headline>
                    第1問
                  </Headline>
                  <Paragraph fontFamily={fontFamilies.sansSerif}>
                    (1-1)これは手を動かすだけの簡単な問題です。まずStep 0で<Katex>x_0 = x_1 = x_2 = 0</Katex>と初期化されていることに注意してください。次にStep 1を5回繰り返します。
                  </Paragraph>
                  <Paragraph fontFamily={fontFamilies.sansSerif}>
                    （1回目）<Katex>i = 1, 2, 3</Katex>に対して、<Katex>d_i(x_i + 1)</Katex>は次のようになります。
                    
                  </Paragraph>
                  <Katexes>
                    {String.raw`(1)これは手をうごかすだけのかん$\dint a + b\ dx$`}
                  </Katexes>
                  <Headline>
                    はじめに
                  </Headline>
                  <Paragraph>
                    ふーん
                  </Paragraph>
                  <Headline>
                    第1問
                  </Headline>
                  <Paragraph fontFamily={fontFamilies.sansSerif}>
                    (1-1)これは手を動かすだけの簡単な問題です。まずStep 0で<Katex>x_0 = x_1 = x_2 = 0</Katex>と初期化されていることに注意してください。次にStep 1を5回繰り返します。
                  </Paragraph>
                  <Paragraph fontFamily={fontFamilies.sansSerif}>
                    （1回目）<Katex>i = 1, 2, 3</Katex>に対して、<Katex>d_i(x_i + 1)</Katex>は次のようになります。
                    
                  </Paragraph>
                  <Katexes>
                    {String.raw`(1)これは手をうごかすだけのかん$\dint a + b\ dx$`}
                  </Katexes>
                  <Headline>
                    はじめに
                  </Headline>
                  <Paragraph>
                    ふーん
                  </Paragraph>
                  <Headline>
                    第1問
                  </Headline>
                  <Paragraph fontFamily={fontFamilies.sansSerif}>
                    (1-1)これは手を動かすだけの簡単な問題です。まずStep 0で<Katex>x_0 = x_1 = x_2 = 0</Katex>と初期化されていることに注意してください。次にStep 1を5回繰り返します。
                  </Paragraph>
                  <Paragraph fontFamily={fontFamilies.sansSerif}>
                    （1回目）<Katex>i = 1, 2, 3</Katex>に対して、<Katex>d_i(x_i + 1)</Katex>は次のようになります。
                    
                  </Paragraph>
                  <Katexes>
                    {String.raw`(1)これは手をうごかすだけのかん$\dint a + b\ dx$`}
                  </Katexes>
                  <Headline>
                    はじめに
                  </Headline>
                  <Paragraph>
                    ふーん
                  </Paragraph>
                  <Headline>
                    第1問
                  </Headline>
                  <Paragraph fontFamily={fontFamilies.sansSerif}>
                    (1-1)これは手を動かすだけの簡単な問題です。まずStep 0で<Katex>x_0 = x_1 = x_2 = 0</Katex>と初期化されていることに注意してください。次にStep 1を5回繰り返します。
                  </Paragraph>
                  <Paragraph fontFamily={fontFamilies.sansSerif}>
                    （1回目）<Katex>i = 1, 2, 3</Katex>に対して、<Katex>d_i(x_i + 1)</Katex>は次のようになります。
                    
                  </Paragraph>
                  <Katexes>
                    {String.raw`(1)これは手をうごかすだけのかん$\dint a + b\ dx$`}
                  </Katexes>
                </div>
              )
            }
          ]}
        />

      <NostFooter />
    </Body>
  )
}