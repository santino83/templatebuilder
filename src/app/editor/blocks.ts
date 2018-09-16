import {Content00Block} from './blocks/contents/content-00.block';
import {BlockDescriptor} from './template-editor.types';
import {Content01Block} from './blocks/contents/content-01.block';

const _blocks: Map<string, BlockDescriptor> = new Map<string, BlockDescriptor>();

/* CONTENT BLOCKS */
_blocks.set(Content00Block.ID, {type: Content00Block, info: Content00Block.INFO});
_blocks.set(Content01Block.ID, {type: Content01Block, info: Content01Block.INFO});


export const BLOCKS = _blocks;
