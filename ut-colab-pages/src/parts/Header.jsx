import { NostHeader, NostHeaderLogo, NostHeaderMenu, NostHeaderMenuItem, NostHeaderUtils } from "../okmtyuta-react-lib/components/nost/NostHeader"
import { Link, RouterLinkWrapper } from "../okmtyuta-react-lib/components";
import { Link as RouterLink } from "react-router-dom";

import SearchIcon from '@mui/icons-material/Search';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CodeIcon from '@mui/icons-material/Code';
import ArticleIcon from '@mui/icons-material/Article';
import GestureIcon from '@mui/icons-material/Gesture';

export const Header = (props) => {
  return (
    <NostHeader>
    <NostHeaderLogo>
      <RouterLinkWrapper>
        <RouterLink to="/">
          okmtyuta ENGINEER BLOG
        </RouterLink>
      </RouterLinkWrapper>
    </NostHeaderLogo>

    <NostHeaderUtils>
      <Link href="#">
        <NostHeaderMenuItem>
          <SearchIcon />
          <div>
            Search
          </div>
        </NostHeaderMenuItem>
      </Link>

      <Link href="#">
        <NostHeaderMenuItem>
          <PermIdentityIcon />
          <div>
            Log In
          </div>
        </NostHeaderMenuItem>
      </Link>
    </NostHeaderUtils>

  <NostHeaderMenu>

    <Link href="#">
      <NostHeaderMenuItem>
        <CodeIcon />
        <div>
          Code
        </div>
      </NostHeaderMenuItem>
    </Link>

    <Link href="#">
      <NostHeaderMenuItem>
        <ArticleIcon />
        <div>
          Article
        </div>
      </NostHeaderMenuItem>
    </Link>

    <Link href="#">
      <NostHeaderMenuItem>
        <GestureIcon />
        <div>
          Illust
        </div>
      </NostHeaderMenuItem>
    </Link>

  </NostHeaderMenu>

  </NostHeader>
  )
}