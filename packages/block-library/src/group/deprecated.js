/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { InnerBlocks, getColorClassName } from '@wordpress/block-editor';

const migrateCustomColors = ( attributes ) => {
	if ( ! attributes.customTextColor && ! attributes.customBackgroundColor ) {
		return attributes;
	}
	const style = { color: {} };
	if ( attributes.customTextColor ) {
		style.color.text = attributes.customTextColor;
	}
	if ( attributes.customBackgroundColor ) {
		style.color.background = attributes.customBackgroundColor;
	}
	return {
		...attributes,
		style,
	};
};

const deprecated = [
	// Version of the block without global styles support
	{
		attributes: {
			backgroundColor: {
				type: 'string',
			},
			customBackgroundColor: {
				type: 'string',
			},
			textColor: {
				type: 'string',
			},
			customTextColor: {
				type: 'string',
			},
		},
		supports: {
			align: [ 'wide', 'full' ],
			anchor: true,
			html: false,
		},
		migrate: migrateCustomColors,
		save( { attributes } ) {
			const {
				backgroundColor,
				customBackgroundColor,
				textColor,
				customTextColor,
			} = attributes;

			const backgroundClass = getColorClassName(
				'background-color',
				backgroundColor
			);
			const textClass = getColorClassName( 'color', textColor );
			const className = classnames( backgroundClass, textClass, {
				'has-text-color': textColor || customTextColor,
				'has-background': backgroundColor || customBackgroundColor,
			} );

			const styles = {
				backgroundColor: backgroundClass
					? undefined
					: customBackgroundColor,
				color: textClass ? undefined : customTextColor,
			};

			return (
				<div className={ className } style={ styles }>
					<div className="wp-block-group__inner-container">
						<InnerBlocks.Content />
					</div>
				</div>
			);
		},
	},
	// Version of the group block with a bug that made text color class not applied.
	{
		attributes: {
			backgroundColor: {
				type: 'string',
			},
			customBackgroundColor: {
				type: 'string',
			},
			textColor: {
				type: 'string',
			},
			customTextColor: {
				type: 'string',
			},
		},
		migrate: migrateCustomColors,
		supports: {
			align: [ 'wide', 'full' ],
			anchor: true,
			html: false,
		},
		save( { attributes } ) {
			const {
				backgroundColor,
				customBackgroundColor,
				textColor,
				customTextColor,
			} = attributes;

			const backgroundClass = getColorClassName(
				'background-color',
				backgroundColor
			);
			const textClass = getColorClassName( 'color', textColor );
			const className = classnames( backgroundClass, {
				'has-text-color': textColor || customTextColor,
				'has-background': backgroundColor || customBackgroundColor,
			} );

			const styles = {
				backgroundColor: backgroundClass
					? undefined
					: customBackgroundColor,
				color: textClass ? undefined : customTextColor,
			};

			return (
				<div className={ className } style={ styles }>
					<div className="wp-block-group__inner-container">
						<InnerBlocks.Content />
					</div>
				</div>
			);
		},
	},
	// v1 of group block. Deprecated to add an inner-container div around `InnerBlocks.Content`.
	{
		attributes: {
			backgroundColor: {
				type: 'string',
			},
			customBackgroundColor: {
				type: 'string',
			},
		},
		supports: {
			align: [ 'wide', 'full' ],
			anchor: true,
			html: false,
		},
		migrate: migrateCustomColors,
		save( { attributes } ) {
			const { backgroundColor, customBackgroundColor } = attributes;

			const backgroundClass = getColorClassName(
				'background-color',
				backgroundColor
			);
			const className = classnames( backgroundClass, {
				'has-background': backgroundColor || customBackgroundColor,
			} );

			const styles = {
				backgroundColor: backgroundClass
					? undefined
					: customBackgroundColor,
			};

			return (
				<div className={ className } style={ styles }>
					<InnerBlocks.Content />
				</div>
			);
		},
	},
];

export default deprecated;
