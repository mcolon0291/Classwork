let radio = {
    stations:[
        {name: '97.1', 
        songs: [
            {
                title: 'As I am', 
                artist: 'Beyonce'
            },
            {
                title:'7 Rings',
                artist: 'Arianna Grande'
            },
            {
                title: 'Rare',
                artist: 'Selena Gomez'
            }
        ]},
        {
            name: '105.1', 
            songs: [
                {
                    title: 'Say So',
                    artist:'Doja Cat'
                },
                {
                    title: 'Easy On Me',
                    artist: 'Adele'
                },
                {
                    title: 'Hello',
                    artist: 'Harry Styles'
                },
            ],
        },
    ],
    
    //change station function
    randomStation: function() {
    
        let stationNum = Math.floor(Math.random() * radio.stations.length);
        let songNum = Math.floor(Math.random() * radio.stations[stationNum].songs.length);
        
        console.log('Now playing: ' + radio.stations[stationNum].songs[songNum].title + ' by ' + radio.stations[stationNum].songs[songNum].artist);
    },
    
}
radio.randomStation();