import {Content00Block} from './blocks/contents/content-00.block';
import {BlockDescriptor} from './template-editor.types';
import {Content01Block} from './blocks/contents/content-01.block';
import {Content02Block} from './blocks/contents/content-02.block';
import {Content03Block} from './blocks/contents/content-03.block';
import {Content04Block} from './blocks/contents/content-04.block';
import {Content05Block} from './blocks/contents/content-05.block';
import {Content06Block} from './blocks/contents/content-06.block';
import {Content07Block} from './blocks/contents/content-07.block';
import {Footer01Block} from './blocks/footers/footer-01.block';

const _blocks: Map<string, BlockDescriptor> = new Map<string, BlockDescriptor>();

/* CONTENT BLOCKS */
_blocks.set(Content00Block.ID, {type: Content00Block, info: Content00Block.INFO});
_blocks.set(Content01Block.ID, {type: Content01Block, info: Content01Block.INFO});
_blocks.set(Content02Block.ID, {type: Content02Block, info: Content02Block.INFO});
_blocks.set(Content03Block.ID, {type: Content03Block, info: Content03Block.INFO});
_blocks.set(Content04Block.ID, {type: Content04Block, info: Content04Block.INFO});
_blocks.set(Content05Block.ID, {type: Content05Block, info: Content05Block.INFO});
_blocks.set(Content06Block.ID, {type: Content06Block, info: Content06Block.INFO});
_blocks.set(Content07Block.ID, {type: Content07Block, info: Content07Block.INFO});

_blocks.set(Footer01Block.ID, {type: Footer01Block, info: Footer01Block.INFO});



export const BLOCKS = _blocks;
