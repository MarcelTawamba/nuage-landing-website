// Simple component loader for header and footer
(function() {
  // Define header template
  const headerTemplate = `
    <nav class="relative z-50 py-4 md:py-6 px-4 bg-white border-b border-gray-200">
      <div class="max-w-7xl mx-auto flex justify-between items-center">
        <!-- Logo -->
        <div class="flex items-center space-x-2 md:space-x-3">
          <a href="index.html" class="flex items-center space-x-2 md:space-x-3 hover:opacity-80 transition-opacity">
            <img src="logo.svg" alt="Rehive" class="h-8 md:h-10 w-auto">
          </a>
        </div>
        
        <!-- Navigation Links - Hidden on mobile -->
        <div class="hidden md:flex items-center space-x-6 md:space-x-8">
          <a href="index.html#individuals" class="text-gray-600 hover:text-gray-900 transition-colors font-medium tracking-wide cursor-pointer text-sm md:text-base">INDIVIDUAL</a>
          <a href="index.html#businesses" class="text-gray-600 hover:text-gray-900 transition-colors font-medium tracking-wide cursor-pointer text-sm md:text-base">BUSINESS</a>
        </div>
        
        <!-- CTA Buttons -->
        <div class="flex items-center space-x-3 md:space-x-4">
          <a href="https://app.rehivepay.com" class="modern-pill-button-sm text-xs md:text-sm">SIGN IN</a>
          
          <!-- Mobile menu button - visible only on mobile -->
          <button class="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors" id="mobile-menu-button">
            <i data-lucide="menu" class="w-5 h-5 text-gray-600"></i>
          </button>
        </div>
      </div>
      
      <!-- Mobile menu - hidden by default -->
      <div class="md:hidden hidden" id="mobile-menu">
        <div class="px-4 py-4 space-y-4 border-t border-gray-200 mt-4">
          <a href="index.html#individuals" class="block text-gray-600 hover:text-gray-900 transition-colors font-medium tracking-wide cursor-pointer text-base py-2">INDIVIDUAL</a>
          <a href="index.html#businesses" class="block text-gray-600 hover:text-gray-900 transition-colors font-medium tracking-wide cursor-pointer text-base py-2">BUSINESS</a>
        </div>
      </div>
    </nav>
  `;

  // Define footer template
  const footerTemplate = `
    <footer class="bg-black text-white py-12 md:py-16 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 gap-8">
          <!-- Company Info -->
          <div>
            <div class="flex items-center space-x-2 md:space-x-3 mb-4 md:mb-6">
              <a href="index.html" class="flex items-center space-x-2 md:space-x-3 hover:opacity-80 transition-opacity">
                <img src="logo.svg" alt="Rehive" class="h-8 md:h-10 w-auto filter brightness-0 invert">
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
              © 2025 Rehive. All rights reserved.
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