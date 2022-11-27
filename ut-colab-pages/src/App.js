import "./okmtyuta-react-lib/css/index.css"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'katex/dist/katex.min.css';

import { LinksPage, TopPage } from "./pages"

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <TopPage />
      ),
    },
    {
      path: "/Links/",
      element: <LinksPage />,
    }
  ]);

  return (
    // <Body>

    //   <Header className="header">
    //     <Wrapper margin="20px" fontSizeType="secondHeadline" fontFamily="anton" color={colors.themeColor}>
    //       UTokyo Coffee Laboratory
    //     </Wrapper>
    //   </Header>

    //   <Main className="main">
    //     {/* <Paragraph>
    //       <Katex>
    //         {String.raw`\dint a + b dx`}
    //       </Katex>
    //       <Katexes>
    //         {String.raw`
    //           $m = \dim M$とする．任意の$p\in M$に対して，ある$M$の座標近傍$\kakko{U, \varphi, V}$が存在して$\varphi\kakko{p} = \zerof{m}$である．$\zerof{m} = \varphi\kakko{p}\in V\subset\mathbb{R}^m$であるからある$r_p > 0$が存在して，$B_m\kakko{0, r}\subset V$である．そこで
    //           \begin{align*}
    //             U_p &= \varphi^{-1}\kakko{B_m\kakko{0, r_p}}\subset V\\
    //             \varphi_p\kakko{q} &= \bunsuu{3}{r}\varphi\kakko{q}\mifkakko{q\in U_p}
    //           \end{align*}
    //           とおけば，$\varphi_p\kakko{p} = \bunsuu{3}{r_p} = 0$であって，$\kakko{U_p, \varphi_p, B_m\kakko{0, 3}}$は$M$の座標近傍である．

    //           $\digcup_{p\in M}{\varphi_p}^{-1}\kakko{B_m\kakko{0, 1}} = M$はコンパクトであるからある$p_1, p_2, \cdots, p_n\in M$が存在して
    //           \begin{align*}
    //             \bigcup_{i = 1}^n {\varphi_p}^{-1}\kakko{B_m\kakko{0,1}} = M
    //           \end{align*}
    //           となる．$1\leq i\leq n$について
    //           \begin{align*}
    //             U_i &= U_{p_i}\\
    //             \varphi_i &= \varphi_{p_i}\\
    //             \chi_i\kakko{q} &= 
    //           \end{align*}
    //           とおく．$\chi_i: M\to\mathbb{R}$は$\cinfty$関数である．同様に$\cinfty$写像$\psi: M \to\mathbb{R}^m$を
    //           \begin{align*}
    //             \psi_i\kakko{q} = 
    //           \end{align*}
    //           と定められる．これらを合わせて関数$F: M\to\mathbb{R}^{\kakko{m + 1}n}$を
    //           \begin{align*}
    //             F\kakko{q} = \kakko{\psi_1\kakko{q}, \psi_2\kakko{q}, \cdots, \psi_n\kakko{q}, \chi_1\kakko{q}, \chi_2\kakko{q}, \cdots, \chi_n\kakko{q}}
    //           \end{align*}
    //           により定める．この$F$が$\cinfty$埋めこみであることを示す．
    //             [(単射性)] 任意の$p, q\in M$に対して$F\kakko{p} = F\kakko{q}$と仮定する．ある$i$が存在して$p\in{\varphi_i}^{-1}\kakko{B_m\kakko{0,1}} \subset U_i$である．このとき$\chi_i\kakko{q} = \chi_i\kakko{p} = 1$であるから，$q\in {\varphi_i}^{-1}\kakko{B_m\kakko{0,2}}$である．$\chi_i\kakko{q} = \chi_i\kakko{p} = 1$により
    //             \begin{align*}
    //               \varphi_i\kakko{p} = \chi_i\kakko{p} \varphi_i\kakko{p} = \psi_i\kakko{p} = \psi_i\kakko{q} = \chi_i\kakko{q} \varphi_i\kakko{q} = \varphi_i\kakko{q}
    //             \end{align*}
    //             となる．$\varphi$は同相であるから$p = q$を得る．
    //             [(中への同相)] $M$はコンパクトで，$F\kakko{M}\subset \mathbb{R}^{\kakko{m + 1}n}$はハウスドルフ空間であるから，連続全単射$F: M\to F\kakko{M}$は同相写像である．
    //             [($\cinfty$はめこみ)] 任意の$q\in M$とある$i$について$q\in {\varphi_i}^{-1}\kakko{B_m\kakko{0,1}}\subset U_i$である．そこで$q$の近傍で$\psi_i = \varphi_i$となる，$\kakko{d\psi_i}_q = \kakko{d\phi_i}_q: T_qM\to T_{\psi_i\kakko{q}}\mathbb{R}^m$は同型である．よって
    //             \begin{align*}
    //               \kakko{dF}_q = \kakko{\kakko{d\psi_1}_q, {\kakko{d\psi_2}_q, \cdots, {\kakko{d\psi_m}_q}}, \cdots}: T_q M \to T_{F\kakko{q}}\mathbb{R}^{\kakko{m + 1}n}
    //             \end{align*}
    //             も単射である．

    //           以上のことから$F$が$\cinfty$埋めこみであることがわかった．`}
    //       </Katexes>
    //     </Paragraph> */}
    

    //   </Main>
    //   <Footer className="footer">
    //     <Wrapper color={colors.lightCharColor} fontSizeType="caption" margin="4px" align="center">
    //       © 2020-2022 Fromoshima All rights reserved.
    //     </Wrapper>
    //   </Footer>

    // </Body>
    <RouterProvider router={router} />
  );
}

export default App;