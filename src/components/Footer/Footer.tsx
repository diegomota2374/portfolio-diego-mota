"use client";

import React from "react";
import Link from "next/link"; // Import Link from next/link
import SocialLinks from "../SocialLinks/SocialLinks";

const Footer = () => {
  return (
    <footer
      className="bg-lightBackground dark:bg-darkBackground py-8"
      data-testid="footer"
    >
      <div className="container mx-auto px-4" data-testid="footer-container">
        <div
          className="flex flex-col md:flex-row justify-between items-center"
          data-testid="footer-content"
        >
          {/* Footer Navigation */}
          <div className="mb-4 md:mb-0" data-testid="footer-navigation">
            <ul className="flex space-x-6" data-testid="footer-nav-list">
              <li data-testid="footer-nav-item-0">
                <Link
                  href="#introdução" // Use Link component for navigation
                  className="text-lightText dark:text-darkText hover:underline"
                  data-testid="footer-nav-link-introduction"
                >
                  Introdução
                </Link>
              </li>
              <li data-testid="footer-nav-item-1">
                <Link
                  href="#experiências" // Use Link component for navigation
                  className="text-lightText dark:text-darkText hover:underline"
                  data-testid="footer-nav-link-experience"
                >
                  Experiências
                </Link>
              </li>
              <li data-testid="footer-nav-item-2">
                <Link
                  href="#por-que-Eu" // Use Link component for navigation
                  className="text-lightText dark:text-darkText hover:underline"
                  data-testid="footer-nav-link-why-buzzvel"
                >
                  Por Que Eu
                </Link>
              </li>
            </ul>
          </div>

          {/* Social media */}
          <SocialLinks data-testid="social-links" />
        </div>

        {/* Copyright */}
        <div
          className="mt-8 text-center text-gray-600 dark:text-gray-400"
          data-testid="footer-copyright"
        >
          <p data-testid="footer-copyright-text">
            &copy; {new Date().getFullYear()} Meu Portfolio. Diego Mota
            Cavalcante.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
