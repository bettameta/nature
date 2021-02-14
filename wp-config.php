<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'nature' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'U3)|:ZzPHC0uDjfk.nVk!L8QyNcxzAV^Gi_|5/<R+PTg@]`OneQt[ K.pfdu@+&n' );
define( 'SECURE_AUTH_KEY',  '#,eJ%UAd0!iOc?PS`m~[~Pr4uCI-hCLy.M_SE6qz*<#&R%~+G#mBwjBN*_@U4$z<' );
define( 'LOGGED_IN_KEY',    'AY>@!3j](@c)(C)1~tWKn<y(fPZ].%t!_:ZkU|qq${>?@)ZSTSp;lzw`42lM!^(h' );
define( 'NONCE_KEY',        '%l8o[uH(?*dGJm&]QRN~AF3!/.Cc|qDFalo_ zL[aYHNW?<IsREz6MZn=$Z)3U*n' );
define( 'AUTH_SALT',        'N <^n(Rzh6Wl1IFv4p04JK_fn8syjCo]rz#Xe0z9v+r1I?(v$R5:z(Ix24S hfM;' );
define( 'SECURE_AUTH_SALT', 'GYb@X[ktL0Eim</KA U~-P* s9. OH,_}p;[ Aw1IO~2F:CQ@k<Q{T23tN?44rm5' );
define( 'LOGGED_IN_SALT',   'FOY^=?d/c@[g]W!O_;DyYtomyQ?&QilmjmWTks{ay;b@Botc)*xZ9d?~B#aDd4xK' );
define( 'NONCE_SALT',       '0)~9m8~1W}mpJZ,y#(oI>i.Rj 2;{.!oZ;~-&GbtF2gxq23>r;S=4uo_OD;%dHr2' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
