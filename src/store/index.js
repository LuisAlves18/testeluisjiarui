/* eslint-disable */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({

    state: {
        users: [{
                id: 1,
                username: 'luijalves',
                password: 'jiaburro'
            },
            {
                id: 2,
                username: 'jiacurto',
                password: 'jiaburroX2'
            },
            {
                id: 3,
                username: 'ruiOpai',
                password: 'jiacontinuaburro'
            },
            {
                id: 4,
                username: 'admin',
                password: 'admin'
            }
        ],
        games: [{
                id: 1,
                name: 'Rocket League',
                img: 'https://www.truetrophies.com/boxart/Game_3363.png',
                owner: 'luijalves',
                players: [{
                        idPlayer: 1,
                        timesPlayed: 1
                    },
                    {
                        idPlayer: 2,
                        timesPlayed: 3
                    }
                ],
                state: 'aberto'
            },
            {
                id: 2,
                name: 'League of Legends',
                img: 'https://static.techspot.com/images2/downloads/topdownload/2014/05/leagueoflegends.png ',
                owner: 'jiacurto',
                players: [{
                        idPlayer: 2,
                        timesPlayed: 13
                    },
                    {
                        idPlayer: 3,
                        timesPlayed: 1
                    }
                ],
                state: 'aberto'

            },
            {
                id: 3,
                name: 'Paladins',
                img: 'https://paladinsgeneratordownload.webnode.com/_files/200000005-9a80c9b9a/70Paladins%20Hack%20Download%2020186.png ',
                owner: 'ruiOpai',
                players: [{
                        idPlayer: 3,
                        timesPlayed: 12
                    },
                    {
                        idPlayer: 1,
                        timesPlayed: 4
                    },
                    {
                        idPlayer: 2,
                        timesPlayed: 3
                    }
                ],
                state: 'aberto'
            },
            {
                id: 4,
                name: 'Counter-Strike 1.6',
                img: 'https://3.bp.blogspot.com/-SCxRhhXqB8/WaQHTw_XDnI/AAAAAAAACG4/NanFeU19OKczGFs5FGGUoH7DtZAplfkSACLcBGAs/s1600/cs1.6.png ',
                owner: 'luijalves',
                players: [{
                        idPlayer: 1,
                        timesPlayed: 20
                    },
                    {
                        idPlayer: 2,
                        timesPlayed: 19
                    }
                ],
                state: 'aberto'
            },


            {
                id: 5,
                name: 'Valorant',
                img: 'https://pbs.twimg.com/profile_images/1271880138507145216/jEx4bMW0.png ',
                owner: 'jiacurto',
                players: [{
                        idPlayer: 2,
                        timesPlayed: 10
                    },
                    {
                        idPlayer: 1,
                        timesPlayed: 5
                    }
                ],
                state: 'aberto'
            },
            {
                id: 6,
                name: 'Fifa 21',
                img: 'https://styles.redditmedia.com/t5_2ujwl/styles/communityIcon_uhf2mbyzn8c51.jpg?width=256&format=pjpg&s=3d03801ce5fc6c0daf1375a2e01927cce71d1d3b',
                owner: 'ruiOpai',
                players: [{
                        idPlayer: 3,
                        timesPlayed: 330
                    },
                    {
                        idPlayer: 2,
                        timesPlayed: 13
                    }
                ],
                state: 'aberto'
            },
            {
                id: 7,
                name: 'Brawl Stars',
                img: 'https://d2p8jjwwnx090z.cloudfront.net/437/058/331/710003000-1q0b9po-j8419mhofgtgdmf/original/f9129743fbfc129f4c483d244d99e804.jpg',
                owner: 'luijalves',
                players: [{
                    idPlayer: 1,
                    timesPlayed: 887
                }],
                state: 'aberto'
            }
        ],
        loggedUser: sessionStorage.getItem('loggedUser') ? JSON.parse(sessionStorage.getItem('loggedUser')) : '',

    },
    getters: {
        getLoggedUser: (state) => state.loggedUser,
        isLoggedUser: (state) => state.loggedUser == '' ? false : true,
        isLoggedAdmin: (state) => state.loggedUser.username == 'admin' ? true : false
    },
    mutations: {
        LOGIN(state, user) {
            state.loggedUser = user
        },
        LOGOUT(state) {
            state.loggedUser = ''
        },
        CLOSE(state, payload) {
            console.log(payload.idGame)
            state.games = state.games.map(game => {
                if (game.id == payload.idGame) {
                    game.state = 'fechado'
                }
                return game;
            })
        },
        PLAY(state, payload) {
            state.games.map(game => {
                if (game.id == payload.gameId) {
                    game.players.map(player => {
                        if (player.idPlayer == payload.loggedUser) {
                            player.timesPlayed++
                        }
                    })
                }
            })
        },
        ADDGAME(state, payload) {
            state.games.push({
                id: payload.id,
                name: payload.name,
                img: payload.img,
                owner: payload.owner,
                players: payload.players,
                state: payload.state
            })
        }

    },
    actions: {
        login(context, payload) {
            //verificar se este user ja existe
            const user = context.state.users.find(user => user.username === payload.username && user.password === payload.password)
            if (user != undefined) {
                //login com sucesso
                context.commit('LOGIN', user)
                sessionStorage.setItem('loggedUser', JSON.stringify(user))
            } else {
                //login sem sucesso
                throw Error('Login Inválido')
            }
        },
        logout(context) {
            context.commit('LOGOUT')
            sessionStorage.removeItem('loggedUser')
        },
        close(context, payload) {
            context.commit('CLOSE', payload)
        },
        play(context, payload) {
            context.commit('PLAY', payload)
        },
        addGame(context) {
            context.commit('ADDGAME', payload)
        }
    },
    modules: {}
});