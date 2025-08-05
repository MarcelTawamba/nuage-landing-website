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
    <footer class="pt-12 md:pt-16 pb-8 md:pb-12 px-6 md:px-4 text-white relative overflow-hidden" style="background: linear-gradient(135deg, #1356F7 0%, #0d47d4 50%, #0a3bb8 100%);">
      <!-- Large faded logo background -->
      <div class="absolute inset-0 flex items-end justify-center opacity-10" style="bottom: -10%;">
        <img src="img/footer_logo.svg" alt="Nuage" class="w-full max-w-7xl h-auto object-contain">
      </div>
      
      <div class="max-w-7xl mx-auto relative z-10">
        <div class="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-16">
          <!-- Company Info -->
          <div class="flex-1 w-full">
            <div class="flex items-center mb-8 md:mb-10">
              <a href="index.html" class="flex items-center hover:opacity-80 transition-opacity">
                <img src="img/logo.png" alt="Nuage" class="h-9 md:h-10 w-auto filter brightness-0 invert">
              </a>
            </div>
            <p class="text-base md:text-lg text-gray-300 mb-8 md:mb-10 max-w-md leading-relaxed font-light">
              The easiest way to get paid, move money, and hold dollars—wherever you are. Available in 100+ countries worldwide.
            </p>
            <div class="flex space-x-8 mb-8 md:mb-0">
              <a href="https://www.facebook.com/NuageMoney/" target="_blank" rel="noopener noreferrer" class="text-gray-300 hover:text-white transition-colors">
                <i data-lucide="facebook" class="w-6 md:w-7 h-6 md:h-7"></i>
              </a>
              <a href="https://www.linkedin.com/company/nuagemoney/" target="_blank" rel="noopener noreferrer" class="text-gray-300 hover:text-white transition-colors">
                <i data-lucide="linkedin" class="w-6 md:w-7 h-6 md:h-7"></i>
              </a>
              <a href="https://www.tiktok.com/@nuagemoney" target="_blank" rel="noopener noreferrer" class="text-gray-300 hover:text-white transition-colors">
                <svg class="w-6 md:w-7 h-6 md:h-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Legal Links Column -->
          <div class="flex flex-col space-y-4 md:space-y-3 text-sm md:text-sm text-gray-300 text-left md:text-right">
            <a href="terms.html" class="hover:text-white transition-colors tracking-wide font-medium">TERMS OF SERVICE</a>
            <a href="privacy.html" class="hover:text-white transition-colors tracking-wide font-medium">PRIVACY POLICY</a>
          </div>
        </div>

        <!-- Bottom Section -->
        <div class="border-t border-white/10 mt-12 md:mt-16 pt-8 md:pt-10">
          <p class="text-gray-300 text-sm md:text-base text-center md:text-left">
            © 2025 Nuage. All rights reserved.
          </p>
          
          <!-- Regulatory Information -->
          <div class="mt-6 text-gray-300 text-xs md:text-sm text-center md:text-left leading-relaxed">
            <p class="mb-2">
              Nuage Payment Canada Limited (reg. number 1000710387) is a company incorporated in Ontario, Canada at 55 University Avenue, Suite 1100, Toronto, Ontario M5J 2H7
            </p>
            <p class="mb-2">
              Nuage Payments Canada Limited is registered and regulated by Financial Transactions and Report Analysis Centre (FINTRAC), Canada as a Money Service Business. MSB registration number: C100000046.
            </p>
            <p>
              Nuage Payment Canada Limited a financial technology services provider, not a bank
            </p>
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