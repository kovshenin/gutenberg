/**
 * WordPress dependencies
 */
import { useSelect } from '@wordpress/data';
import { isUnmodifiedDefaultBlock } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import { store as blockEditorStore } from '../../store';
import { useHasBlockToolbar } from '../block-toolbar/use-has-block-toolbar';

/**
 * Source of truth for which block tools are showing in the block editor.
 *
 * @return {Object} Object of which block tools will be shown.
 */
export function useShowBlockTools() {
	const hasBlockToolbar = useHasBlockToolbar();

	return useSelect(
		( select ) => {
			const {
				getSelectedBlockClientId,
				getFirstMultiSelectedBlockClientId,
				getBlock,
				getSettings,
				hasMultiSelection,
				__unstableGetEditorMode,
				isTyping,
			} = select( blockEditorStore );

			const clientId =
				getSelectedBlockClientId() ||
				getFirstMultiSelectedBlockClientId();

			const block = getBlock( clientId ) || { name: '', attributes: {} };
			const editorMode = __unstableGetEditorMode();
			const hasSelectedBlock = clientId && block?.name;
			const isEmptyDefaultBlock = isUnmodifiedDefaultBlock( block );
			const _showEmptyBlockSideInserter =
				clientId &&
				! isTyping() &&
				editorMode === 'edit' &&
				isEmptyDefaultBlock;
			const maybeShowBreadcrumb =
				hasSelectedBlock &&
				! hasMultiSelection() &&
				( editorMode === 'navigation' || editorMode === 'zoom-out' );

			return {
				showEmptyBlockSideInserter: _showEmptyBlockSideInserter,
				showBreadcrumb:
					! _showEmptyBlockSideInserter && maybeShowBreadcrumb,
				showBlockToolbarPopover:
					hasBlockToolbar &&
					! getSettings().hasFixedToolbar &&
					! _showEmptyBlockSideInserter &&
					hasSelectedBlock &&
					! isEmptyDefaultBlock &&
					! maybeShowBreadcrumb,
				showFixedToolbar:
					editorMode !== 'zoom-out' &&
					hasBlockToolbar &&
					getSettings().hasFixedToolbar,
			};
		},
		[ hasBlockToolbar ]
	);
}
