import { Fragment, useEffect, useState } from "react";
import { Box, Drawer, Toolbar, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import "../assets/styles/sidebar.scss";
import ICON_DISCOVER from "../assets/images/discover.svg";
import ICON_PLAYLIST from "../assets/images/playlist.svg";
import ICON_MOVIE from "../assets/images/movie.svg";
import ICON_TV_SHOWS from "../assets/images/tv-shows.svg";
import ICON_MY_LIST from "../assets/images/my-list.svg";
import ICON_WATCH_LATER from "../assets/images/watch-later.svg";
import ICON_RECOMMENDED from "../assets/images/recommended.svg";
import ICON_SETTINGS from "../assets/images/settings.svg";
import ICON_LOGOUT from "../assets/images/logout.svg";
import ICON_LIGHT_THEME from "../assets/images/light-theme.svg";
import ICON_OPTIONS from "../assets/images/options.svg";
import USER_PROFILE from "../assets/images/user-profile.svg";
import Discover from "./Discover";

const drawerWidth = 320;
const sidebarNavItems = [
  {
    display: "Discover",
    icon: ICON_DISCOVER,
    to: "/",
    section: "",
  },
  {
    display: "Playlist",
    icon: ICON_PLAYLIST,
    to: "/playlist",
    section: "playlist",
  },
  {
    display: "Movie",
    icon: ICON_MOVIE,
    to: "/movie",
    section: "movie",
  },
  {
    display: "TV Shows",
    icon: ICON_TV_SHOWS,
    to: "/tv-shows",
    section: "tv-shows",
  },
  {
    display: "My List",
    icon: ICON_MY_LIST,
    to: "/my-list",
    section: "my-list",
    hasBottomRule: true,
  },
  {
    display: "Watch Later",
    icon: ICON_WATCH_LATER,
    to: "/watch-later",
    section: "watch-later",
  },
  {
    display: "Recommended",
    icon: ICON_RECOMMENDED,
    to: "/recommended",
    section: "recommended",
    hasBottomRule: true,
  },
  {
    display: "Settings",
    icon: ICON_SETTINGS,
    to: "/settings",
    section: "settings",
  },
  {
    display: "Logout",
    icon: ICON_LOGOUT,
    to: "/logout",
    section: "logout",
  },
];

const ResponsiveDrawer = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation();

  // change active index
  useEffect(() => {
    const curPath = window?.location?.pathname.split("/")[1] ?? [];
    const activeItem = sidebarNavItems.findIndex(item => item.section === curPath);
    setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <div className="sidebar">
        <div className="sidebar__user">
          <img src={USER_PROFILE} alt="" className="sidebar__user__image" />
          <span className="sidebar__user__username">{"Eric Hoffman"}</span>
        </div>
        <div className="u-horizontal-rule my-4"></div>
        <div className="sidebar__menu">
          <div className="sidebar__menu__indicator"></div>
          {sidebarNavItems.map((item, index) => (
            <Fragment key={item.display}>
              <Link to={item.to}>
                <div className={`sidebar__menu__item ${activeIndex === index ? "active" : ""}`}>
                  <div className="sidebar__menu__item__icon">
                    <img src={item.icon} alt="" />
                  </div>
                  <div className="sidebar__menu__item__text">{item.display}</div>
                </div>
              </Link>
              {item.hasBottomRule && <div className="u-horizontal-rule my-2"></div>}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ mr: 2, display: { sm: "none" } }}
        className="drawer-expand-icon-button"
      >
        <MenuIcon />
      </IconButton>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        className="container-fluid"
      >
        <div className="top-theme-options">
          <img src={ICON_LIGHT_THEME} alt="" className="me-3" width="20" height="20" />
          <img src={ICON_OPTIONS} alt="" width="3" height="20" />
        </div>
        <Routes>
          <Route path="/" element={<Discover />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default ResponsiveDrawer;