let games = [
    {id: '1', title: 'Zelda, Tears of the Kingdom', platform: ['Switch']},
    {id: '2', title: 'Elden Ring', platform: ['Switch', 'PS5', 'XBOX']}
]


let authors  = [
    {id : '1', name : 'mario', verified: true},
    {id : '2', name : 'yoshi', verified: false}
]

let reviews = [
    {id: '1', rating: 9, content: 'lorem ipsum', author_id: '1', game_id:'2'},
    {id: '2', rating: 10, content: 'lorem ipsum', author_id: '2', game_id:'1'},
]

export default {games, authors, reviews}