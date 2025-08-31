# ⚽ Champions League Guess Who

A mobile-friendly web application that brings the classic "Guess Who?" game to UEFA Champions League winners. Perfect for football fans who want to test their knowledge of Champions League history!

## 🎮 How to Play

### Setup
- **Players**: 2 or more people
- **Device**: One person holds the mobile device/tablet
- **Objective**: Guess the randomly selected Champions League winner through yes/no questions

### Game Flow
1. One player (the "Game Master") opens the application on their device
2. Click "Get New Player" to randomly select a Champions League winner
3. The Game Master can see all the player's information but keeps the name hidden
4. Other players ask yes/no questions to narrow down the possibilities
5. The Game Master answers based on the visible information
6. Continue until someone correctly guesses the player
7. Use "Reveal Answer" to show/hide the player's name

### Example Questions
- "Was the player a defender?"
- "Did they score a goal in a Champions League final?"
- "Are they from Europe?"
- "Did they win with Real Madrid?"
- "Were they a captain in a final?"
- "Are they from Africa?"
- "Did they win multiple Champions League titles?"

## 📱 Features

- **Mobile-Optimized**: Designed for smartphones and tablets
- **25 Legendary Players**: From Zidane to Messi to modern stars
- **Rich Player Data**: Position, nationality, teams, final goals, and more
- **Interactive Interface**: Easy-to-read information cards
- **Responsive Design**: Works on all screen sizes

## 🏆 Player Database

The game includes Champions League winners from different eras:

### Positions Covered
- **Goalkeepers**: Iker Casillas, Manuel Neuer, Petr Cech
- **Defenders**: Sergio Ramos, Paolo Maldini, Virgil van Dijk, John Terry
- **Midfielders**: Zinedine Zidane, Xavi, Iniesta, Luka Modric, Andrea Pirlo
- **Attackers**: Lionel Messi, Cristiano Ronaldo, Samuel Eto'o, Gareth Bale

### Geographic Diversity
- **Europe**: Spain, France, Italy, England, Germany, Croatia, Wales, Netherlands
- **South America**: Argentina, Brazil
- **Africa**: Cameroon, Ivory Coast, Egypt, Senegal

### Attributes Tracked
- Player name and position
- Nationality and continent
- Teams won Champions League with
- Years of victories
- Age when first won
- Whether they scored in a final
- Whether they were captain in a final
- Specific final goals scored

## 🚀 Getting Started

### Simple Setup
1. Download or clone the repository
2. Open `index.html` in any modern web browser
3. No installation or build process required!

### Local Development
```bash
# Clone the repository
git clone [repository-url]

# Navigate to the project
cd champions-league-guess-who

# Open in browser (or use a local server)
open index.html

# For local server (optional)
python -m http.server 8000
# Then visit http://localhost:8000
```

## 🔧 Technical Details

### Technologies Used
- **HTML5**: Semantic structure with mobile viewport
- **CSS3**: Responsive design with CSS Grid and Flexbox
- **Vanilla JavaScript**: No frameworks - pure ES6+
- **JSON**: Structured player database

### Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Android Chrome)
- Progressive enhancement approach

### File Structure
```
champions-league-guess-who/
├── index.html          # Main game interface
├── style.css           # Mobile-first responsive styles
├── script.js           # Game logic and interactions
├── players.json        # Player database
└── README.md          # This file
```

## 🎯 Game Strategy Tips

### For Guessers
- Start with broad categories (position, continent)
- Ask about recent vs. historical players
- Consider multiple-time winners vs. one-time winners
- Think about famous final moments

### For Game Masters
- Keep the device hidden from other players
- Answer only based on the information shown
- Don't give hints beyond yes/no answers
- Use "Reveal Answer" when someone guesses correctly

## 🚀 Future Enhancements

Potential features for future versions:
- Player photos
- More detailed statistics
- Difficulty levels (fewer attributes shown)
- Timer mode
- Score tracking
- Expanded player database
- Team-based filtering
- Historical tournament context

## 🤝 Contributing

This is an open-source project! Contributions welcome:
- Add more players to the database
- Improve mobile UX
- Add new game modes
- Fix bugs or improve performance

## ⚽ About

Created for Champions League fans who love the history and legends of European football's premier competition. Perfect for pre-match entertainment, football trivia nights, or testing your Champions League knowledge!

**Enjoy the game and may the best guesser win!** 🏆