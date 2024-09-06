export interface ThemeToggleProps {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface MenuItemsProps {
  handleScrollToSection: (sectionId: string) => void;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface HamburgerButtonProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface DesktopMenuProps {
  handleScrollToSection: (sectionId: string) => void;
}

export interface ExperienceItemProps {
  year: string;
  description: React.ReactNode;
}

export interface SlideProps {
  slide: {
    title: string;
    description: string;
    imagePath: string;
    urlProject: string;
  };
}

export interface ButtonProps {
  onClick: () => void;
}

export interface Event {
  year: string;
  title: string;
  details: string[];
}
