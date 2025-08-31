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
                    "age": 29,
                    "captainInFinal": false
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
                    "age": 28,
                    "captainInFinal": true
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
                    "age": 23,
                    "captainInFinal": false
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
                    "age": 19,
                    "captainInFinal": false
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
                    "age": 19,
                    "captainInFinal": true
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
                    "age": 25,
                    "captainInFinal": false
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
                    "age": 24,
                    "captainInFinal": false
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
                    "age": 22,
                    "captainInFinal": true
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
                    "age": 26,
                    "captainInFinal": false
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
                    "age": 22,
                    "captainInFinal": false
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
                    "age": 25,
                    "captainInFinal": false
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
                    "age": 31,
                    "captainInFinal": false
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
                    "age": 26,
                    "captainInFinal": false
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
                    "age": 33,
                    "captainInFinal": false
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
                    "age": 31,
                    "captainInFinal": true
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
                    "age": 34,
                    "captainInFinal": false
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
                    "age": 29,
                    "captainInFinal": false
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
                    "age": 24,
                    "captainInFinal": false
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
                    "age": 28,
                    "captainInFinal": false
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
                    "age": 27,
                    "captainInFinal": false
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
                    "age": 26,
                    "captainInFinal": false
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
                    "age": 27,
                    "captainInFinal": false
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
                    "age": 29,
                    "captainInFinal": true
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
                    "age": 31,
                    "captainInFinal": false
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
                    "age": 27,
                    "captainInFinal": true
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
        document.getElementById('playerNationality').textContent = player.nationality;
        document.getElementById('playerContinent').textContent = player.continent;
        document.getElementById('playerAge').textContent = player.age;
        
        // Teams and years
        document.getElementById('playerTeams').textContent = player.teamsWon.join(', ');
        document.getElementById('playerYears').textContent = player.yearsWon.join(', ');
        
        // Boolean values with color coding
        const scoredElement = document.getElementById('playerScoredInFinal');
        const captainElement = document.getElementById('playerCaptain');
        
        scoredElement.textContent = player.scoredInFinal ? 'Yes' : 'No';
        scoredElement.className = `info-value ${player.scoredInFinal ? 'yes' : 'no'}`;
        
        captainElement.textContent = player.captainInFinal ? 'Yes' : 'No';
        captainElement.className = `info-value ${player.captainInFinal ? 'yes' : 'no'}`;
        
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
        const revealBtn = document.getElementById('revealBtn');
        
        if (playerNameElement.textContent === '???') {
            // Reveal the player
            playerNameElement.textContent = this.currentPlayer.name;
            revealBtn.textContent = 'Hide Answer';
        } else {
            // Hide the player
            playerNameElement.textContent = '???';
            revealBtn.textContent = 'Reveal Answer';
        }
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