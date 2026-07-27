import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";

const drawerWidth = 280;
const navItems = [
  ["About", "about"],
  ["Expertise", "expertise"],
  ["Stack", "stack"],
  ["Experience", "experience"],
  ["Projects", "projects"],
  ["Education", "education"],
  ["Contact", "contact"],
];

interface NavigationProps {
  mode: "dark" | "light";
  modeChange: () => void;
}

function Navigation({ mode, modeChange }: NavigationProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
      const marker = window.scrollY + window.innerHeight * 0.34;
      let current = "";

      navItems.forEach(([, target]) => {
        const section = document.getElementById(target);
        if (!section) return;
        const sectionTop = window.scrollY + section.getBoundingClientRect().top;
        if (sectionTop <= marker) current = target;
      });

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const scrollToSection = (section: string) => {
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(section === "home" ? "" : section);
    setMobileOpen(false);
  };

  const navList = (
    <List>
      {navItems.map(([label, target]) => (
        <ListItem key={target} disablePadding>
          <ListItemButton
            onClick={() => scrollToSection(target)}
            selected={activeSection === target}
            aria-current={activeSection === target ? "page" : undefined}
          >
            <ListItemText primary={label} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        id="navigation"
        className={`navbar-fixed-top${scrolled ? " scrolled" : ""}`}
        elevation={0}
      >
        <Toolbar className="navigation-bar">
          <button className="wordmark" onClick={() => scrollToSection("home")} aria-label="Back to top">
            LB<span>.</span>
          </button>

          <Box className="desktop-navigation" sx={{ display: { xs: "none", md: "flex" } }}>
            {navItems.map(([label, target]) => (
              <Button
                key={target}
                className={activeSection === target ? "active" : undefined}
                aria-current={activeSection === target ? "page" : undefined}
                onClick={() => scrollToSection(target)}
              >
                {label}
              </Button>
            ))}
          </Box>

          <div className="navigation-actions">
            <IconButton
              color="inherit"
              aria-label={`Switch to ${mode === "dark" ? "light" : "dark"} mode`}
              onClick={modeChange}
            >
              {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
            <IconButton
              color="inherit"
              aria-label="Open navigation menu"
              onClick={() => setMobileOpen(true)}
              sx={{ display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <Box className="navigation-bar-responsive">
          <div className="mobile-menu-top">
            <span>Navigate</span>
            <IconButton aria-label="Close navigation menu" onClick={() => setMobileOpen(false)}>
              ×
            </IconButton>
          </div>
          <Divider />
          {navList}
        </Box>
      </Drawer>
    </Box>
  );
}

export default Navigation;
