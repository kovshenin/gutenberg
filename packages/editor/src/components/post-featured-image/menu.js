/**
 * WordPress dependencies
 */
import { __experimentalInspectorPopoverHeader as InspectorPopoverHeader } from '@wordpress/block-editor';
import { NavigableMenu, MenuGroup, MenuItem } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import {
	media as mediaIcon,
	upload as uploadIcon,
	trash as trashIcon,
} from '@wordpress/icons';

export default function PostFeaturedImageMenu( {
	title,
	removeImageLabel,
	onClose,
	onOpenMediaLibrary,
	onOpenFileDialog,
	onRemoveImage,
} ) {
	return (
		<div className="editor-post-featured-image__menu">
			<InspectorPopoverHeader
				className="editor-post-featured-image__menu-header"
				title={ title }
				onClose={ onClose }
			/>
			<NavigableMenu>
				<MenuGroup>
					<MenuItem
						icon={ mediaIcon }
						iconPosition="left"
						onClick={ () => {
							onOpenMediaLibrary();
							onClose();
						} }
					>
						{ __( 'Open Media Library' ) }
					</MenuItem>
					<MenuItem
						icon={ uploadIcon }
						iconPosition="left"
						onClick={ () => {
							onOpenFileDialog();
							onClose();
						} }
					>
						{ __( 'Upload file' ) }
					</MenuItem>
					{ onRemoveImage && (
						<MenuItem
							icon={ trashIcon }
							iconPosition="left"
							isDestructive
							onClick={ () => {
								onRemoveImage();
								onClose();
							} }
						>
							{ removeImageLabel }
						</MenuItem>
					) }
				</MenuGroup>
			</NavigableMenu>
		</div>
	);
}
