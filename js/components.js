// Simple component loader for header and footer
(function() {
  // Define header template
  const headerTemplate = `
    <nav class="relative z-50 py-6 px-6">
      <div class="max-w-4xl mx-auto">
        <!-- Rounded Navigation Container -->
        <div class="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-6 py-3 flex justify-between items-center shadow-sm">
          <!-- Logo -->
          <div class="flex items-center">
            <a href="index.html" class="flex items-center hover:opacity-80 transition-opacity">
              <img src="img/logo.png" alt="Nuage" class="h-7 w-auto">
            </a>
          </div>
          
          <!-- Navigation Links - Hidden on mobile -->
          <div class="hidden md:flex items-center space-x-8">
            <a href="#individuals" class="text-gray-700 hover:text-gray-900 transition-colors font-medium text-sm">Individual</a>
            <a href="#businesses" class="text-gray-700 hover:text-gray-900 transition-colors font-medium text-sm">Business</a>
          </div>
          
          <!-- Sign In Button -->
          <div class="flex items-center">
            <a href="https://app.nuage.money/" class="modern-pill-button-sm">
              SIGN IN
            </a>
            
            <!-- Mobile menu button - visible only on mobile -->
            <button class="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors ml-3" id="mobile-menu-button">
              <i data-lucide="menu" class="w-4 h-4 text-gray-600"></i>
            </button>
          </div>
        </div>
        
        <!-- Mobile menu - hidden by default -->
        <div class="md:hidden hidden mt-4" id="mobile-menu">
          <div class="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl px-6 py-4 space-y-3 shadow-sm">
            <a href="#individuals" class="block text-gray-700 hover:text-gray-900 transition-colors font-medium text-sm py-2">Individual</a>
            <a href="#businesses" class="block text-gray-700 hover:text-gray-900 transition-colors font-medium text-sm py-2">Business</a>
          </div>
        </div>
      </div>
    </nav>
  `;

  // Define footer template
  const footerTemplate = `
    <footer class="py-12 md:py-16 px-4 text-white" style="background: linear-gradient(135deg, #1356F7 0%, #0d47d4 50%, #0a3bb8 100%);">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 gap-8">
          <!-- Company Info -->
          <div>
            <div class="flex items-center mb-4 md:mb-6">
              <a href="index.html" class="flex items-center hover:opacity-80 transition-opacity">
                <img src="img/logo.png" alt="Nuage" class="h-8 md:h-10 w-auto filter brightness-0 invert">
              </a>
            </div>
            <p class="text-sm md:text-base text-gray-400 mb-4 md:mb-6 max-w-md leading-relaxed">
              The easiest way to get paid, move money, and hold dollars—wherever you are. Available in 100+ countries worldwide.
            </p>
            <div class="flex space-x-4">
              <a href="#" class="text-gray-400 hover:text-white transition-colors">
                <i data-lucide="x" class="w-4 md:w-5 h-4 md:h-5"></i>
              </a>
              <a href="#" class="text-gray-400 hover:text-white transition-colors">
                <i data-lucide="linkedin" class="w-4 md:w-5 h-4 md:h-5"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- Bottom Section -->
        <div class="border-t border-gray-800 mt-8 md:mt-12 pt-6 md:pt-8">
          <div class="flex flex-col md:flex-row justify-between items-center">
            <p class="text-gray-400 text-xs md:text-sm mb-4 md:mb-0">
              © 2025 Nuage. All rights reserved.
            </p>
            <div class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-xs md:text-sm text-gray-400">
              <a href="terms.html" class="hover:text-white transition-colors tracking-wide">TERMS OF SERVICE</a>
              <a href="privacy.html" class="hover:text-white transition-colors tracking-wide">PRIVACY POLICY</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `;

  // Function to load components
  function loadComponents() {
    // Load header
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
      headerPlaceholder.innerHTML = headerTemplate;
      
      // Initialize mobile menu functionality
      const mobileMenuButton = document.getElementById('mobile-menu-button');
      const mobileMenu = document.getElementById('mobile-menu');
      
      if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
          const isHidden = mobileMenu.classList.contains('hidden');
          if (isHidden) {
            mobileMenu.classList.remove('hidden');
            mobileMenuButton.querySelector('i').setAttribute('data-lucide', 'x');
          } else {
            mobileMenu.classList.add('hidden');
            mobileMenuButton.querySelector('i').setAttribute('data-lucide', 'menu');
          }
          // Reinitialize icons
          if (window.lucide) {
            lucide.createIcons();
          }
        });
      }
    }
    
    // Load footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
      footerPlaceholder.innerHTML = footerTemplate;
    }
  }

  // Load components when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadComponents);
  } else {
    loadComponents();
  }
})(); 