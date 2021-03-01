<?php
/**
 * .
 *
 * @package WPDesk\FCF\Free
 */

namespace WPDesk\FCF\Free\Admin;

use FcfVendor\WPDesk\PluginBuilder\Plugin\Hookable;
use FcfVendor\WPDesk\PluginBuilder\Plugin\HookablePluginDependant;
use FcfVendor\WPDesk\PluginBuilder\Plugin\PluginAccess;

/**
 * Removes WooCommerce footer in plugin settings page.
 */
class Page implements Hookable, HookablePluginDependant {

	use PluginAccess;

	/**
	 * Integrate with WordPress and with other plugins using action/filter system.
	 *
	 * @return void
	 */
	public function hooks() {
		add_filter( 'admin_footer_text', [ $this, 'update_footer_text' ], 10 );
	}

	/**
	 * .
	 *
	 * @param string $original_text .
	 *
	 * @internal
	 */
	public function update_footer_text( string $original_text ): string {
		return '';
	}

}
