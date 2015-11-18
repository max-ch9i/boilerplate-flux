'use strict';

export type Action =
    {
        type: 'sort:rank'
    } |
    {
        type: 'populate:init',
        data: Array
    };