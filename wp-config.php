<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'bizwin-db' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'VD6<271Hek|VhlE5?9yXY^UT/:8|0blQ#z~LkYN{,giB4mrgRQ}a%0i[:W/r8+mA' );
define( 'SECURE_AUTH_KEY',  '%XNRo51M,eKsWn3]X:9`j5at|?CrmKbBzeNRi+S:T~Z5#+(#fI_X;|JY.Ui/w$;Q' );
define( 'LOGGED_IN_KEY',    'CE`vFchwL*#xC`>0L#6cAaY90XB6zSNd&$z|rvo@4j!Iw,:K_(.*>tY8OTD#lI|?' );
define( 'NONCE_KEY',        'pS!mLxzzVbzOVXxsz$5AlwoCdJVmG_}/yM&lkn{Dv17zxT[fwdh}/CmW99}H;4-Z' );
define( 'AUTH_SALT',        ',8%v</Tg}fwEo^keVqzio>hw*7GHZfEH~C}e$6T#a6zHZ2dP1{rR:K7xI D>V_AF' );
define( 'SECURE_AUTH_SALT', 'K*FLNm5~/J:?L5u-:1f([lC5qh)]s&wX: 4&nFFUuao[)0yj}pOqY53b>.x7.21V' );
define( 'LOGGED_IN_SALT',   'xOg1j_cEqv&s{ZtAL#mAX0bL5UE)+*}PvUE42i}OzPqYG?Hrh59GB9GQhMj`!/rQ' );
define( 'NONCE_SALT',       'MkU|;1NtoWD4ay8&LJ<Rt4s;#e;%V7DrAs4FfQsPW~;FvHdCaSXo.ufm]kmg7e*.' );

/**#@-*/

/**
 * WordPress database table prefix.
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
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
