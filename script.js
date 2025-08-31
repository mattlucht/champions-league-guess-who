class ChampionsLeagueGuessWho {
    constructor() {
        this.players = [];
        this.currentPlayer = null;
        this.gameStarted = false;
        
        this.init();
    }
    
    async init() {
        await this.loadPlayers();
        this.setupEventListeners();
        this.showWelcomeMessage();
    }
    
    async loadPlayers() {
        try {
            const response = await fetch('players.json');
            this.players = await response.json();
        } catch (error) {
            console.warn('Could not load players.json, using embedded data:', error);
            // Fallback data for when file is opened directly in browser
            this.players = [
                {
                    "id": 1,
                    "name": "Zinedine Zidane",
                    "position": "Midfielder",
                    "nationality": "French",
                    "continent": "Europe",
                    "teamsWon": ["Real Madrid"],
                    "yearsWon": [2002],
                    "scoredInFinal": true,
                    "finalGoals": ["2002 vs Bayer Leverkusen (winning goal)"],
                    "captainInFinal": false,
                    "ballonDorWinner": true,
                    "worldCupWinner": true,
                    "premierLeagueWinner": false,
                    "laLigaWinner": true,
                    "bundesligaWinner": false,
                    "serieAWinner": false,
                    "ligue1Winner": false,
                    "playingEra": "2000s",
                    "preferredFoot": "Right"
                },
                {
                    "id": 2,
                    "name": "Sergio Ramos",
                    "position": "Defender",
                    "nationality": "Spanish",
                    "continent": "Europe",
                    "teamsWon": ["Real Madrid"],
                    "yearsWon": [2014, 2016, 2017, 2018],
                    "scoredInFinal": true,
                    "finalGoals": ["2014 vs Atletico Madrid (equalizer)"],
                    "captainInFinal": true,
                    "ballonDorWinner": false,
                    "worldCupWinner": true,
                    "premierLeagueWinner": false,
                    "laLigaWinner": true,
                    "bundesligaWinner": false,
                    "serieAWinner": false,
                    "ligue1Winner": false,
                    "playingEra": "2010s",
                    "preferredFoot": "Right"
                },
                {
                    "id": 3,
                    "name": "Cristiano Ronaldo",
                    "position": "Attacker",
                    "nationality": "Portuguese",
                    "continent": "Europe",
                    "teamsWon": ["Manchester United", "Real Madrid"],
                    "yearsWon": [2008, 2014, 2016, 2017, 2018],
                    "scoredInFinal": false,
                    "finalGoals": [],
                    "captainInFinal": false,
                    "ballonDorWinner": true,
                    "worldCupWinner": false,
                    "premierLeagueWinner": true,
                    "laLigaWinner": true,
                    "bundesligaWinner": false,
                    "serieAWinner": false,
                    "ligue1Winner": false,
                    "playingEra": "2000s",
                    "preferredFoot": "Right"
                },
                {
                    "id": 4,
                    "name": "Lionel Messi",
                    "position": "Attacker",
                    "nationality": "Argentinian",
                    "continent": "South America",
                    "teamsWon": ["Barcelona"],
                    "yearsWon": [2006, 2009, 2011, 2015],
                    "scoredInFinal": true,
                    "finalGoals": ["2009 vs Manchester United", "2011 vs Manchester United"],
                    "captainInFinal": false,
                    "ballonDorWinner": true,
                    "worldCupWinner": true,
                    "premierLeagueWinner": false,
                    "laLigaWinner": true,
                    "bundesligaWinner": false,
                    "serieAWinner": false,
                    "ligue1Winner": true,
                    "playingEra": "2000s",
                    "preferredFoot": "Left"
                },
                {
                    "id": 5,
                    "name": "Iker Casillas",
                    "position": "Goalkeeper",
                    "nationality": "Spanish",
                    "continent": "Europe",
                    "teamsWon": ["Real Madrid"],
                    "yearsWon": [2000, 2002, 2014, 2016, 2017, 2018],
                    "scoredInFinal": false,
                    "finalGoals": [],
                    "captainInFinal": true,
                    "ballonDorWinner": false,
                    "worldCupWinner": true,
                    "premierLeagueWinner": false,
                    "laLigaWinner": true,
                    "bundesligaWinner": false,
                    "serieAWinner": false,
                    "ligue1Winner": false,
                    "playingEra": "2000s",
                    "preferredFoot": "Right"
                },
                {
                    "id": 6,
                    "name": "Samuel Eto'o",
                    "position": "Attacker",
                    "nationality": "Cameroonian",
                    "continent": "Africa",
                    "teamsWon": ["Barcelona", "Inter Milan"],
                    "yearsWon": [2006, 2009, 2010],
                    "scoredInFinal": true,
                    "finalGoals": ["2006 vs Arsenal"],
                    "captainInFinal": false,
                    "ballonDorWinner": false,
                    "worldCupWinner": false,
                    "premierLeagueWinner": false,
                    "laLigaWinner": true,
                    "bundesligaWinner": false,
                    "serieAWinner": true,
                    "ligue1Winner": false,
                    "playingEra": "2000s",
                    "preferredFoot": "Right"
                },
                {
                    "id": 7,
                    "name": "Andrea Pirlo",
                    "position": "Midfielder",
                    "nationality": "Italian",
                    "continent": "Europe",
                    "teamsWon": ["AC Milan"],
                    "yearsWon": [2003, 2007],
                    "scoredInFinal": false,
                    "finalGoals": [],
                    "captainInFinal": false,
                    "ballonDorWinner": false,
                    "worldCupWinner": true,
                    "premierLeagueWinner": false,
                    "laLigaWinner": false,
                    "bundesligaWinner": false,
                    "serieAWinner": true,
                    "ligue1Winner": false,
                    "playingEra": "2000s",
                    "preferredFoot": "Right"
                },
                {
                    "id": 8,
                    "name": "Paolo Maldini",
                    "position": "Defender",
                    "nationality": "Italian",
                    "continent": "Europe",
                    "teamsWon": ["AC Milan"],
                    "yearsWon": [1990, 1994, 2003, 2007],
                    "scoredInFinal": true,
                    "finalGoals": ["2005 vs Liverpool (though Milan lost)", "2007 vs Liverpool"],
                    "captainInFinal": true,
                    "ballonDorWinner": false,
                    "worldCupWinner": false,
                    "premierLeagueWinner": false,
                    "laLigaWinner": false,
                    "bundesligaWinner": false,
                    "serieAWinner": true,
                    "ligue1Winner": false,
                    "playingEra": "90s",
                    "preferredFoot": "Left"
                },
                {
                    "id": 9,
                    "name": "Xavi Hernandez",
                    "position": "Midfielder",
                    "nationality": "Spanish",
                    "continent": "Europe",
                    "teamsWon": ["Barcelona"],
                    "yearsWon": [2006, 2009, 2011, 2015],
                    "scoredInFinal": false,
                    "finalGoals": [],
                    "captainInFinal": false,
                    "ballonDorWinner": false,
                    "worldCupWinner": true,
                    "premierLeagueWinner": false,
                    "laLigaWinner": true,
                    "bundesligaWinner": false,
                    "serieAWinner": false,
                    "ligue1Winner": false,
                    "playingEra": "2000s",
                    "preferredFoot": "Right"
                },
                {
                    "id": 10,
                    "name": "Andres Iniesta",
                    "position": "Midfielder",
                    "nationality": "Spanish",
                    "continent": "Europe",
                    "teamsWon": ["Barcelona"],
                    "yearsWon": [2006, 2009, 2011, 2015],
                    "scoredInFinal": false,
                    "finalGoals": [],
                    "captainInFinal": false,
                    "ballonDorWinner": false,
                    "worldCupWinner": true,
                    "premierLeagueWinner": false,
                    "laLigaWinner": true,
                    "bundesligaWinner": false,
                    "serieAWinner": false,
                    "ligue1Winner": false,
                    "playingEra": "2000s",
                    "preferredFoot": "Right"
                },
                {
                    "id": 11,
                    "name": "Kaka",
                    "position": "Midfielder",
                    "nationality": "Brazilian",
                    "continent": "South America",
                    "teamsWon": ["AC Milan"],
                    "yearsWon": [2007],
                    "scoredInFinal": false,
                    "finalGoals": [],
                    "captainInFinal": false,
                    "ballonDorWinner": true,
                    "worldCupWinner": true,
                    "premierLeagueWinner": false,
                    "laLigaWinner": false,
                    "bundesligaWinner": false,
                    "serieAWinner": true,
                    "ligue1Winner": false,
                    "playingEra": "2000s",
                    "preferredFoot": "Right"
                },
                {
                    "id": 12,
                    "name": "Thierry Henry",
                    "position": "Attacker",
                    "nationality": "French",
                    "continent": "Europe",
                    "teamsWon": ["Barcelona"],
                    "yearsWon": [2009],
                    "scoredInFinal": false,
                    "finalGoals": [],
                    "captainInFinal": false,
                    "ballonDorWinner": false,
                    "worldCupWinner": true,
                    "premierLeagueWinner": true,
                    "laLigaWinner": true,
                    "bundesligaWinner": false,
                    "serieAWinner": false,
                    "ligue1Winner": false,
                    "playingEra": "2000s",
                    "preferredFoot": "Right"
                },
                {
                    "id": 13,
                    "name": "Ronaldinho",
                    "position": "Attacker",
                    "nationality": "Brazilian",
                    "continent": "South America",
                    "teamsWon": ["Barcelona"],
                    "yearsWon": [2006],
                    "scoredInFinal": false,
                    "finalGoals": [],
                    "captainInFinal": false,
                    "ballonDorWinner": true,
                    "worldCupWinner": true,
                    "premierLeagueWinner": false,
                    "laLigaWinner": true,
                    "bundesligaWinner": false,
                    "serieAWinner": false,
                    "ligue1Winner": false,
                    "playingEra": "2000s",
                    "preferredFoot": "Right"
                },
                {
                    "id": 14,
                    "name": "Frank Lampard",
                    "position": "Midfielder",
                    "nationality": "English",
                    "continent": "Europe",
                    "teamsWon": ["Chelsea"],
                    "yearsWon": [2012],
                    "scoredInFinal": false,
                    "finalGoals": [],
                    "captainInFinal": false,
                    "ballonDorWinner": false,
                    "worldCupWinner": false,
                    "premierLeagueWinner": true,
                    "laLigaWinner": false,
                    "bundesligaWinner": false,
                    "serieAWinner": false,
                    "ligue1Winner": false,
                    "playingEra": "2000s",
                    "preferredFoot": "Right"
                },
                {
                    "id": 15,
                    "name": "John Terry",
                    "position": "Defender",
                    "nationality": "English",
                    "continent": "Europe",
                    "teamsWon": ["Chelsea"],
                    "yearsWon": [2012],
                    "scoredInFinal": false,
                    "finalGoals": [],
                    "captainInFinal": true,
                    "ballonDorWinner": false,
                    "worldCupWinner": false,
                    "premierLeagueWinner": true,
                    "laLigaWinner": false,
                    "bundesligaWinner": false,
                    "serieAWinner": false,
                    "ligue1Winner": false,
                    "playingEra": "2000s",
                    "preferredFoot": "Right"
                },
                {
                    "id": 16,
                    "name": "Didier Drogba",
                    "position": "Attacker",
                    "nationality": "Ivorian",
                    "continent": "Africa",
                    "teamsWon": ["Chelsea"],
                    "yearsWon": [2012],
                    "scoredInFinal": true,
                    "finalGoals": ["2012 vs Bayern Munich (equalizer)"],
                    "captainInFinal": false,
                    "ballonDorWinner": false,
                    "worldCupWinner": false,
                    "premierLeagueWinner": true,
                    "laLigaWinner": false,
                    "bundesligaWinner": false,
                    "serieAWinner": false,
                    "ligue1Winner": true,
                    "playingEra": "2000s",
                    "preferredFoot": "Right"
                },
                {
                    "id": 17,
                    "name": "Petr Cech",
                    "position": "Goalkeeper",
                    "nationality": "Czech",
                    "continent": "Europe",
                    "teamsWon": ["Chelsea"],
                    "yearsWon": [2012],
                    "scoredInFinal": false,
                    "finalGoals": [],
                    "captainInFinal": false,
                    "ballonDorWinner": false,
                    "worldCupWinner": false,
                    "premierLeagueWinner": true,
                    "laLigaWinner": false,
                    "bundesligaWinner": false,
                    "serieAWinner": false,
                    "ligue1Winner": false,
                    "playingEra": "2000s",
                    "preferredFoot": "Right"
                },
                {
                    "id": 18,
                    "name": "Gareth Bale",
                    "position": "Attacker",
                    "nationality": "Welsh",
                    "continent": "Europe",
                    "teamsWon": ["Real Madrid"],
                    "yearsWon": [2014, 2016, 2017, 2018],
                    "scoredInFinal": true,
                    "finalGoals": ["2018 vs Liverpool (2 goals including bicycle kick)"],
                    "captainInFinal": false,
                    "ballonDorWinner": false,
                    "worldCupWinner": false,
                    "premierLeagueWinner": true,
                    "laLigaWinner": true,
                    "bundesligaWinner": false,
                    "serieAWinner": false,
                    "ligue1Winner": false,
                    "playingEra": "2010s",
                    "preferredFoot": "Left"
                },
                {
                    "id": 19,
                    "name": "Luka Modric",
                    "position": "Midfielder",
                    "nationality": "Croatian",
                    "continent": "Europe",
                    "teamsWon": ["Real Madrid"],
                    "yearsWon": [2014, 2016, 2017, 2018],
                    "scoredInFinal": false,
                    "finalGoals": [],
                    "captainInFinal": false,
                    "ballonDorWinner": true,
                    "worldCupWinner": false,
                    "premierLeagueWinner": true,
                    "laLigaWinner": true,
                    "bundesligaWinner": false,
                    "serieAWinner": false,
                    "ligue1Winner": false,
                    "playingEra": "2010s",
                    "preferredFoot": "Right"
                },
                {
                    "id": 20,
                    "name": "Virgil van Dijk",
                    "position": "Defender",
                    "nationality": "Dutch",
                    "continent": "Europe",
                    "teamsWon": ["Liverpool"],
                    "yearsWon": [2019],
                    "scoredInFinal": false,
                    "finalGoals": [],
                    "captainInFinal": false,
                    "ballonDorWinner": false,
                    "worldCupWinner": false,
                    "premierLeagueWinner": true,
                    "laLigaWinner": false,
                    "bundesligaWinner": false,
                    "serieAWinner": false,
                    "ligue1Winner": false,
                    "playingEra": "2010s",
                    "preferredFoot": "Right"
                },
                {
                    "id": 21,
                    "name": "Mohamed Salah",
                    "position": "Attacker",
                    "nationality": "Egyptian",
                    "continent": "Africa",
                    "teamsWon": ["Liverpool"],
                    "yearsWon": [2019],
                    "scoredInFinal": true,
                    "finalGoals": ["2019 vs Tottenham (penalty)"],
                    "captainInFinal": false,
                    "ballonDorWinner": false,
                    "worldCupWinner": false,
                    "premierLeagueWinner": true,
                    "laLigaWinner": false,
                    "bundesligaWinner": false,
                    "serieAWinner": true,
                    "ligue1Winner": false,
                    "playingEra": "2010s",
                    "preferredFoot": "Left"
                },
                {
                    "id": 22,
                    "name": "Sadio Mane",
                    "position": "Attacker",
                    "nationality": "Senegalese",
                    "continent": "Africa",
                    "teamsWon": ["Liverpool"],
                    "yearsWon": [2019],
                    "scoredInFinal": false,
                    "finalGoals": [],
                    "captainInFinal": false,
                    "ballonDorWinner": false,
                    "worldCupWinner": false,
                    "premierLeagueWinner": true,
                    "laLigaWinner": false,
                    "bundesligaWinner": true,
                    "serieAWinner": false,
                    "ligue1Winner": false,
                    "playingEra": "2010s",
                    "preferredFoot": "Right"
                },
                {
                    "id": 23,
                    "name": "Jordan Henderson",
                    "position": "Midfielder",
                    "nationality": "English",
                    "continent": "Europe",
                    "teamsWon": ["Liverpool"],
                    "yearsWon": [2019],
                    "scoredInFinal": false,
                    "finalGoals": [],
                    "captainInFinal": true,
                    "ballonDorWinner": false,
                    "worldCupWinner": false,
                    "premierLeagueWinner": true,
                    "laLigaWinner": false,
                    "bundesligaWinner": false,
                    "serieAWinner": false,
                    "ligue1Winner": false,
                    "playingEra": "2010s",
                    "preferredFoot": "Right"
                },
                {
                    "id": 24,
                    "name": "Robert Lewandowski",
                    "position": "Attacker",
                    "nationality": "Polish",
                    "continent": "Europe",
                    "teamsWon": ["Bayern Munich"],
                    "yearsWon": [2020],
                    "scoredInFinal": false,
                    "finalGoals": [],
                    "captainInFinal": false,
                    "ballonDorWinner": false,
                    "worldCupWinner": false,
                    "premierLeagueWinner": false,
                    "laLigaWinner": false,
                    "bundesligaWinner": true,
                    "serieAWinner": false,
                    "ligue1Winner": false,
                    "playingEra": "2010s",
                    "preferredFoot": "Right"
                },
                {
                    "id": 25,
                    "name": "Manuel Neuer",
                    "position": "Goalkeeper",
                    "nationality": "German",
                    "continent": "Europe",
                    "teamsWon": ["Bayern Munich"],
                    "yearsWon": [2013, 2020],
                    "scoredInFinal": false,
                    "finalGoals": [],
                    "captainInFinal": true,
                    "ballonDorWinner": false,
                    "worldCupWinner": true,
                    "premierLeagueWinner": false,
                    "laLigaWinner": false,
                    "bundesligaWinner": true,
                    "serieAWinner": false,
                    "ligue1Winner": false,
                    "playingEra": "2010s",
                    "preferredFoot": "Right"
                }
            ];
        }
    }
    
    setupEventListeners() {
        const newPlayerBtn = document.getElementById('newPlayerBtn');
        const revealBtn = document.getElementById('revealBtn');
        
        newPlayerBtn.addEventListener('click', () => this.selectRandomPlayer());
        revealBtn.addEventListener('click', () => this.togglePlayerVisibility());
    }
    
    selectRandomPlayer() {
        if (this.players.length === 0) {
            this.showError('No players available. Please refresh the page.');
            return;
        }
        
        const randomIndex = Math.floor(Math.random() * this.players.length);
        this.currentPlayer = this.players[randomIndex];
        
        this.displayPlayer(false);
        this.showGameArea();
        this.gameStarted = true;
        
        // Update button text
        document.getElementById('newPlayerBtn').textContent = 'Get New Player';
        document.getElementById('revealBtn').textContent = 'Reveal Answer';
    }
    
    displayPlayer(revealed = false) {
        if (!this.currentPlayer) return;
        
        const player = this.currentPlayer;
        
        // Basic info - always visible to game master
        document.getElementById('playerName').textContent = revealed ? player.name : '???';
        document.getElementById('playerPosition').textContent = player.position;
        
        // Hide stars initially
        const playerStarsElement = document.getElementById('playerStars');
        if (revealed) {
            this.showPlayerStars();
        } else {
            playerStarsElement.classList.add('hidden');
        }
        document.getElementById('playerNationality').textContent = player.nationality;
        document.getElementById('playerContinent').textContent = player.continent;
        document.getElementById('playerEra').textContent = player.playingEra;
        document.getElementById('playerFoot').textContent = player.preferredFoot;
        
        // Teams and years
        document.getElementById('playerTeams').textContent = player.teamsWon.join(', ');
        document.getElementById('playerYears').textContent = player.yearsWon.join(', ');
        
        // Boolean values with color coding
        const scoredElement = document.getElementById('playerScoredInFinal');
        const captainElement = document.getElementById('playerCaptain');
        const ballonDorElement = document.getElementById('playerBallonDor');
        const worldCupElement = document.getElementById('playerWorldCup');
        const premierLeagueElement = document.getElementById('playerPremierLeague');
        
        scoredElement.textContent = player.scoredInFinal ? 'Yes' : 'No';
        scoredElement.className = `info-value ${player.scoredInFinal ? 'yes' : 'no'}`;
        
        captainElement.textContent = player.captainInFinal ? 'Yes' : 'No';
        captainElement.className = `info-value ${player.captainInFinal ? 'yes' : 'no'}`;
        
        ballonDorElement.textContent = player.ballonDorWinner ? 'Yes' : 'No';
        ballonDorElement.className = `info-value ${player.ballonDorWinner ? 'yes' : 'no'}`;
        
        worldCupElement.textContent = player.worldCupWinner ? 'Yes' : 'No';
        worldCupElement.className = `info-value ${player.worldCupWinner ? 'yes' : 'no'}`;
        
        premierLeagueElement.textContent = player.premierLeagueWinner ? 'Yes' : 'No';
        premierLeagueElement.className = `info-value ${player.premierLeagueWinner ? 'yes' : 'no'}`;
        
        const laLigaElement = document.getElementById('playerLaLiga');
        const bundesligaElement = document.getElementById('playerBundesliga');
        const serieAElement = document.getElementById('playerSerieA');
        const ligue1Element = document.getElementById('playerLigue1');
        
        laLigaElement.textContent = player.laLigaWinner ? 'Yes' : 'No';
        laLigaElement.className = `info-value ${player.laLigaWinner ? 'yes' : 'no'}`;
        
        bundesligaElement.textContent = player.bundesligaWinner ? 'Yes' : 'No';
        bundesligaElement.className = `info-value ${player.bundesligaWinner ? 'yes' : 'no'}`;
        
        serieAElement.textContent = player.serieAWinner ? 'Yes' : 'No';
        serieAElement.className = `info-value ${player.serieAWinner ? 'yes' : 'no'}`;
        
        ligue1Element.textContent = player.ligue1Winner ? 'Yes' : 'No';
        ligue1Element.className = `info-value ${player.ligue1Winner ? 'yes' : 'no'}`;
        
        // Final goals section
        const finalGoalsSection = document.getElementById('finalGoalsSection');
        const finalGoalsList = document.getElementById('playerFinalGoals');
        
        if (player.scoredInFinal && player.finalGoals.length > 0) {
            finalGoalsSection.classList.remove('hidden');
            finalGoalsList.innerHTML = player.finalGoals
                .map(goal => `<div class="goal">${goal}</div>`)
                .join('');
        } else {
            finalGoalsSection.classList.add('hidden');
        }
    }
    
    togglePlayerVisibility() {
        if (!this.currentPlayer) return;
        
        const playerNameElement = document.getElementById('playerName');
        const playerStarsElement = document.getElementById('playerStars');
        const revealBtn = document.getElementById('revealBtn');
        
        if (playerNameElement.textContent === '???') {
            // Reveal the player
            playerNameElement.textContent = this.currentPlayer.name;
            this.showPlayerStars();
            revealBtn.textContent = 'Hide Answer';
        } else {
            // Hide the player
            playerNameElement.textContent = '???';
            playerStarsElement.classList.add('hidden');
            revealBtn.textContent = 'Reveal Answer';
        }
    }
    
    showPlayerStars() {
        if (!this.currentPlayer) return;
        
        const playerStarsElement = document.getElementById('playerStars');
        const titleCount = this.currentPlayer.yearsWon.length;
        
        // Create stars based on number of titles
        const stars = '★'.repeat(titleCount);
        playerStarsElement.innerHTML = `<span class="star">${stars.split('').join('</span><span class="star">')}</span>`;
        playerStarsElement.classList.remove('hidden');
    }
    
    showGameArea() {
        document.getElementById('gameArea').classList.remove('hidden');
        document.getElementById('welcomeMessage').classList.add('hidden');
    }
    
    showWelcomeMessage() {
        document.getElementById('gameArea').classList.add('hidden');
        document.getElementById('welcomeMessage').classList.remove('hidden');
    }
    
    showError(message) {
        // Simple error display - you could enhance this with a modal or toast
        alert(message);
    }
}

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new ChampionsLeagueGuessWho();
});

// Add some fun interactions
document.addEventListener('DOMContentLoaded', () => {
    // Add touch feedback for mobile
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('touchstart', () => {
            button.style.transform = 'scale(0.95)';
        });
        
        button.addEventListener('touchend', () => {
            setTimeout(() => {
                button.style.transform = '';
            }, 100);
        });
    });
    
    // Prevent zoom on double tap for better mobile experience
    let lastTouchEnd = 0;
    document.addEventListener('touchend', (event) => {
        const now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);
});