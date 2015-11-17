class MobileMenu {
  constructor(container) {
    this.$container = container;
    this.$nav = this.$container.find('[data-class="menu"]');
    this.$menuToggle = this.$container.find('[data-class="mobile-menu-toggle"]');
    this.activeClass = 'active';
    this.validator = false;

    this.$menuToggle.on('click', () => {
      this.validate();
    });
  }

  showMenu() {
    this.$container.addClass(this.activeClass);
    this.$menuToggle.addClass(this.activeClass);
    this.validator = true;
  }

  hideMenu() {
    this.$container.removeClass(this.activeClass);
    this.$menuToggle.removeClass(this.activeClass);
    this.validator = false;
  }

  validate() {
    if (this.validator) {
      this.hideMenu();
      this.validator = false;
    } else {
      this.showMenu();
      this.validator = true;
    }
  }
}

$(function() {

  var mobileMenu = new MobileMenu($('[data-class="menu-container"]'));

});
