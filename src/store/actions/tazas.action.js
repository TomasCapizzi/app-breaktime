export const SELECT_TAZA = 'SELECT_TAZA';
export const FILTER_TAZA = 'FILTER_TAZA';

export const selectTaza = (id) => ({
    type: SELECT_TAZA,
    tazaId: id
});

export const filterTaza = (id) => ({
    type: FILTER_TAZA,
    categoryId: id
})