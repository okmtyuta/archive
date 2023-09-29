import { Frame } from '@amatelas/server'
import { Markdown } from '.'

const markdown = `

{?info color} {!danger color} {!danger color} {!danger color}

this is good day

i> 「心を騒がせてはならない。神を信じ、また私を信じなさい。私の父の家には住まいがたくさんある。もしなければ、私はそう言っておいたであろう。あなたがたのために場所を用意しに行くのだ。行ってあなたがたのために場所を用意したら、戻って来て、あなたがたを私のもとに迎える。こうして、私のいる所に、あなたがたもいることになる。 （ヨハネによる福音書 14:1～3）

e> warn blocking!! ***aa***

w> warn blocking!! ***aa***

s> warn blocking!! ***aa***

# Overview ***a***

~one~www.example.com, https://example.com, and contact@example.com.


> QQ I am maation technologies in a broad sense. I am particularly interested in quantum mechanics, probability and statistics, algebra, programming languages, machine learning, and cryptology. For each areas, I am strongly interested in their theoretical structure. I have scored 96 in TOEFL Test.
> > jored in mathematical sciences and inform
> a

https://qiita.com/Qiita/items/c686397e4a0f4f11683d



> ***「心を騒がせてはならない。神を信じ、また私を信じなさい。私の父の家には住まいがたくさんある。もしなければ、私はそう言っておいたであろう。あなたがたのために場所を用意しに行くのだ。行ってあなたがたのために場所を用意したら、戻って来て、あなたがたを私のもとに迎える。こうして、私のいる所に、あなたがたもいることになる。 （ヨハネによる福音書 14:1～3）***

そう救世主は申し上げたのです。

> $D$を領域とし、$f(z)$は$D$上で正則である複素関数とする。$C$が$D$内のある有界領域の境界であって、互いに交わらない有限個の区分的に滑らかなJordan閉曲線からなるとき
> $$
>  \\int_C f(z) dz = 0
> $$
> が成り立つ。

| a | b  |  c |  d  |
| - | :- | -: | :-: |

$D$を領域とし，$f(z)$は$D$上で正則とする。

広い意味で数理科学と情報科学を勉強しています。とくに数理物理学（量子力学），確率統計学，代数学，プログラミング言語，機械学習，暗号理論に興味があります。いずれの分野についてもその理論構造に強い関心があります。また，UI/UXデザインやグラフィックデザイン，3Dモデリングにも興味があります。TOEFL96点取得。

I am majored in mathematical sciences and information technologies in a broad sense. I am particularly interested in quantum mechanics, probability and statistics, algebra, programming languages, machine learning, and cryptology. For each areas, I am strongly interested in their theoretical structure. I have scored 96 in TOEFL Test.

# Educations
大学では数理物理学を学習しました。来年からは大学院で深層学習を学習および研究する予定です。

I have studied Mathematical Physics in undergraduate school. In graduate school, I am going to study mathematical foundation of deep learning.

- Department of Mathematics, Faculty of Science, University of Tokyo: 2020 April - 2024 March, Majored in Mathematical Physics.

# Experiences
学外ではソフトウェアエンジニアとして活動してきました。機械学習やUI/UXデザインの領域でも価値を出していきたいと思っています。

I have worked as software engineer. From now on, I would like to be active in the areas of not only software, but also Machine Learning and UI/UX design.

- Rakuten Group, Inc.: August 2022, Application Engineer, Internship
- Net Protections, Inc.: October 2022 - April 2023, Application Engineer, Internship
- PKSHA Technology, Inc.: March 2022 - April 2023, Software Engineer, Internship
`

export const App = () => {
  return (
    <Frame>
      <Markdown>{markdown}</Markdown>
    </Frame>
  )
}
