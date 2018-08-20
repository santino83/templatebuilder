import {Content01Block} from './blocks/contents/content-01.block';
import {BlockDescriptor} from './template-editor.types';

const _blocks: Map<string, BlockDescriptor> = new Map<string, BlockDescriptor>();

/* CONTENT BLOCKS */
_blocks.set(Content01Block.ID, {type: Content01Block, info: Content01Block.INFO});

export const BLOCKS = _blocks;
