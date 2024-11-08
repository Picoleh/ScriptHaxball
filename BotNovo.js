
var roomName = "🔥⚽ BCC EXPANSIVO";
var roomPassword = "PERCEBA";
var maxPlayers = 20;
var roomPublic = true;
var token = "";
var gameTime = 3; 
var adminCode = "adm"; // !admin contraseña
var autoPlayEnable = false;


var room = HBInit({
	roomName: roomName,
	password: roomPassword,
	maxPlayers: maxPlayers,
	public: roomPublic,
	geo: null,
	noPlayer: true,
	token: token
});

/*-------------------------------- Estadios ---------------------------------*/

function getRealSoccerMap() {
	var realSoccerMap = `{"name" : "Futsal 3x3 4x4 from HaxMaps","width" : 755,"height" : 339,"spawnDistance" : 310,"bg" : { "type" : "hockey", "width" : 665, "height" : 290, "kickOffRadius" : 80, "cornerRadius" : 0 },"vertexes" : [{ "x" : -665, "y" : 290, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea" },{ "x" : -665, "y" : 80, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea" },{ "x" : -665, "y" : -80, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea" },{ "x" : -665, "y" : -290, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea" },{ "x" : 665, "y" : 290, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea" },{ "x" : 665, "y" : 80, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea" },{ "x" : 665, "y" : -80, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea" },{ "x" : 665, "y" : -290, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea" },{ "x" : 0, "y" : 306, "trait" : "kickOffBarrier" },{ "x" : 0, "y" : 80, "trait" : "kickOffBarrier" },{ "x" : 0, "y" : -80, "trait" : "line" },{ "x" : 0, "y" : -306, "trait" : "kickOffBarrier" },{ "x" : -693, "y" : -80, "bCoef" : 0.1, "cMask" : ["ball" ], "trait" : "goalNet" },{ "x" : 693, "y" : -80, "bCoef" : 0.1, "cMask" : ["ball" ], "trait" : "goalNet" },{ "x" : -693, "y" : 80, "bCoef" : 0.1, "cMask" : ["ball" ], "trait" : "goalNet" },{ "x" : 693, "y" : 80, "bCoef" : 0.1, "cMask" : ["ball" ], "trait" : "goalNet" },{ "x" : -665, "y" : -215, "trait" : "line" },{ "x" : -500, "y" : -50, "trait" : "line" },{ "x" : 665, "y" : -215, "trait" : "line" },{ "x" : 500, "y" : -50, "trait" : "line" },{ "x" : -665, "y" : 215, "trait" : "line" },{ "x" : -500, "y" : 50, "trait" : "line" },{ "x" : 665, "y" : 215, "trait" : "line" },{ "x" : 500, "y" : 50, "trait" : "line" },{ "x" : 665, "y" : 290, "bCoef" : 1, "trait" : "ballArea" },{ "x" : 665, "y" : -290, "bCoef" : 1, "trait" : "ballArea" },	{ "x" : 0, "y" : 290, "bCoef" : 0, "trait" : "line" },{ "x" : 0, "y" : -290, "bCoef" : 0, "trait" : "line" },{ "x" : 0, "y" : 80, "trait" : "kickOffBarrier" },{ "x" : 0, "y" : -80, "trait" : "kickOffBarrier" },{ "x" : 674, "y" : -80, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "line" },{ "x" : 674, "y" : -290, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea" },{ "x" : -674, "y" : -80, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "line" },{ "x" : -674, "y" : -290, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea" },{ "x" : -674, "y" : 80, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "line" },{ "x" : -674, "y" : 290, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea" },{ "x" : 674, "y" : 80, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "line" },{ "x" : 674, "y" : 290, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea" }],"segments" : [{ "v0" : 0, "v1" : 1, "trait" : "ballArea" },{ "v0" : 2, "v1" : 3, "trait" : "ballArea" },{ "v0" : 4, "v1" : 5, "trait" : "ballArea" },{ "v0" : 6, "v1" : 7, "trait" : "ballArea" },{ "v0" : 8, "v1" : 9, "trait" : "kickOffBarrier" },{ "v0" : 9, "v1" : 10, "curve" : 180, "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier" },{ "v0" : 9, "v1" : 10, "curve" : -180, "cGroup" : ["redKO" ], "trait" : "kickOffBarrier" },{ "v0" : 10, "v1" : 11, "trait" : "kickOffBarrier" },{ "v0" : 2, "v1" : 12, "curve" : -35, "vis" : true, "color" : "FFFFFF", "bCoef" : 0.1, "cMask" : ["ball" ], "trait" : "goalNet" },{ "v0" : 6, "v1" : 13, "curve" : 35, "vis" : true, "color" : "FFFFFF", "bCoef" : 0.1, "cMask" : ["ball" ], "trait" : "goalNet" },{ "v0" : 1, "v1" : 14, "curve" : 35, "vis" : true, "color" : "FFFFFF", "bCoef" : 0.1, "cMask" : ["ball" ], "trait" : "goalNet" },{ "v0" : 5, "v1" : 15, "curve" : -35, "vis" : true, "color" : "FFFFFF", "bCoef" : 0.1, "cMask" : ["ball" ], "trait" : "goalNet" },{ "v0" : 12, "v1" : 14, "curve" : -35, "vis" : true, "color" : "FFFFFF", "bCoef" : 0.1, "cMask" : ["ball" ], "trait" : "goalNet", "x" : -585 },{ "v0" : 13, "v1" : 15, "curve" : 35, "vis" : true, "color" : "FFFFFF", "bCoef" : 0.1, "cMask" : ["ball" ], "trait" : "goalNet", "x" : 585 },{ "v0" : 16, "v1" : 17, "curve" : 90, "color" : "FFFFFF", "trait" : "line" },{ "v0" : 18, "v1" : 19, "curve" : -90, "color" : "FFFFFF", "trait" : "line" },{ "v0" : 20, "v1" : 21, "curve" : -90, "color" : "FFFFFF", "trait" : "line" },{ "v0" : 22, "v1" : 23, "curve" : 90, "color" : "FFFFFF", "trait" : "line" },{ "v0" : 17, "v1" : 21, "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 0, "trait" : "line" },{ "v0" : 19, "v1" : 23, "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 0, "trait" : "line" },{ "v0" : 1, "v1" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -665 },{ "v0" : 5, "v1" : 4, "vis" : true, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 665 },{ "v0" : 2, "v1" : 3, "vis" : true, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -665 },{ "v0" : 6, "v1" : 7, "vis" : true, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 665 },{ "v0" : 0, "v1" : 24, "vis" : true, "color" : "FFFFFF", "bCoef" : 1, "trait" : "ballArea", "y" : 290 },{ "v0" : 3, "v1" : 25, "vis" : true, "color" : "FFFFFF", "bCoef" : 1, "trait" : "ballArea", "y" : -290 },{ "v0" : 26, "v1" : 27, "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 0, "trait" : "line" },{ "v0" : 10, "v1" : 9, "curve" : -180, "vis" : true, "color" : "FFFFFF", "bCoef" : 0, "trait" : "line" },{ "v0" : 29, "v1" : 28, "curve" : 180, "vis" : true, "color" : "FFFFFF", "bCoef" : 0, "trait" : "line" },{ "v0" : 2, "v1" : 1, "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 0, "trait" : "line" },{ "v0" : 6, "v1" : 5, "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 0, "trait" : "line" },{ "v0" : 30, "v1" : 31, "vis" : false, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 614 },{ "v0" : 32, "v1" : 33, "vis" : false, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -614 },{ "v0" : 34, "v1" : 35, "vis" : false, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -614 },{ "v0" : 36, "v1" : 37, "vis" : false, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 614 }],"goals" : [{ "p0" : [-674,-80 ], "p1" : [-674,80 ], "team" : "red" },{ "p0" : [674,80 ], "p1" : [674,-80 ], "team" : "blue" }],"discs" : [{ "radius" : 5, "pos" : [-665,80 ], "color" : "FFFFFF", "trait" : "goalPost" },{ "radius" : 5, "pos" : [-665,-80 ], "color" : "FFFFFF", "trait" : "goalPost" },{ "radius" : 5, "pos" : [665,80 ], "color" : "FFFFFF", "trait" : "goalPost" },{ "radius" : 5, "pos" : [665,-80 ], "color" : "FFFFFF", "trait" : "goalPost" }],"planes" : [{ "normal" : [0,1 ], "dist" : -290, "trait" : "ballArea" },{ "normal" : [0,-1 ], "dist" : -290, "trait" : "ballArea" },{ "normal" : [0,1 ], "dist" : -339, "bCoef" : 0.2, "cMask" : ["all" ] },{ "normal" : [0,-1 ], "dist" : -339, "bCoef" : 0.2, "cMask" : ["all" ] },{ "normal" : [1,0 ], "dist" : -755, "bCoef" : 0.2, "cMask" : ["all" ] },{ "normal" : [-1,0 ], "dist" : -755, "bCoef" : 0.2, "cMask" : ["all" ] }],"traits" : {"ballArea" : { "vis" : false, "bCoef" : 1, "cMask" : ["ball" ] },"goalPost" : { "radius" : 8, "invMass" : 0, "bCoef" : 1 },"goalNet" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["all" ] },"kickOffBarrier" : { "vis" : false, "bCoef" : 0.1, "cGroup" : ["redKO","blueKO" ], "cMask" : ["red","blue" ] },"line" : { "vis" : true, "bCoef" : 0, "cMask" : ["" ] },"arco" : { "radius" : 2, "cMask" : ["n/d" ], "color" : "cccccc" }},"playerPhysics" : {"acceleration" : 0.11,"kickingAcceleration" : 0.1,"kickStrength" : 7},"ballPhysics" : {"radius" : 6.4,"color" : "EAFF00"}}`;
	
	return realSoccerMap;
}

/*------------------------------ FIN ESTADIOS ----------------------------*/


var throwTimeOut = 420; 
var gkTimeOut = 600; 
var ckTimeOut = 600; 
var throwinDistance = 270; 
var mapBGColor = "86A578"; 
var map = "RSR";
var roomLink = "";
let firmas = new Set();
//var countGoals = new Array(maxPlayers);


// -------------------------------------------------
// Webhooks
// -------------------------------------------------

// -------------------------------------------------
// Clases
// -------------------------------------------------
class Game {
	constructor() {
		this.time = 0;
		this.paused = false;
		this.ballRadius;
		this.rsTouchTeam = 0;
		this.rsActive = true;
		this.rsReady = false;
		this.rsCorner = false;
		this.rsGoalKick = false;
		this.rsSwingTimer = 1000;
		this.rsTimer;
		this.ballOutPositionX;
		this.ballOutPositionY;
		this.throwInPosY;
		this.outStatus = "";
		this.warningCount = 0;
		this.bringThrowBack = false;
		this.lastPlayAnnounced = false;
		this.boosterState;
		this.throwinKicked = false;
		this.pushedOut;
		this.lastKickerId;
		this.lastKickerName;
		this.lastKickerTeam;
		this.secondLastKickerId;
		this.secondLastKickerName;
		this.secondLastKickerTeam;
		this.redScore = 0;
		this.blueScore = 0;
		this.ballSpeed = 0;
        this.prevBallPosition = null;
	}
	
	updateLastKicker(id, name, team) {
		this.secondLastKickerId = this.lastKickerId;
		this.secondLastKickerName = this.lastKickerName;
		this.secondLastKickerTeam = this.lastKickerTeam;
		
		this.lastKickerId = id;
		this.lastKickerName = name;
		this.lastKickerTeam = team;
	}
}

room.setCustomStadium(getRealSoccerMap());
room.setScoreLimit(3);
room.setTimeLimit(3);

room.onRoomLink = function(url) {
	roomLink = url;
	console.log(roomLink);
}

room.onStadiumChange = function(newStadiumName, byPlayer) {
	if (byPlayer != null) {
		map = "custom";
	}
	else {
		map = "RSR";
	}
}

room.onPlayerJoin = function(player) {
	announce(player.name + " chegou na pingola!",null, 0x4766ee, "normal", 0);
	// whisper("", player.id, 0x6e28b0, "bold", 0);
	// whisper("", player.id, 0x6e28b0, "bold", 0);
	// whisper("", player.id, 0x6e28b0, "bold", 0);
	// whisper("", player.id, 0x6e28b0, "bold", 0);
	// whisper("", player.id, 0x6e28b0, "bold", 0);
	// whisper("", player.id, 0x6e28b0, "bold", 0);
	// whisper("", player.id, 0x6e28b0, "bold", 0);
	// whisper("", player.id, 0x6e28b0, "bold", 0);
	// whisper("░█████╗░██╗░░██╗░█████╗░", player.id, 0x6e28b0, "bold", 0);
	// whisper("██╔══██╗██║░░██║██╔══██╗", player.id, 0x762bbd, "bold", 0);
	// whisper("██║░░╚═╝███████║██║░░╚═╝", player.id, 0x7e2ec9, "bold", 0);
	// whisper("██║░░██╗██╔══██║██║░░██╗", player.id, 0x8832d9, "bold", 0);
	// whisper("╚█████╔╝██║░░██║╚█████╔╝", player.id, 0x9137e6, "bold", 0);
	// whisper("░╚════╝░╚═╝░░╚═╝░╚════╝░", player.id, 0x993af2, "bold", 0);
	// whisper("⚽     Cᴀʀᴀʙᴏʙᴏ ʜᴀxʙᴀʟʟ ᴄᴏᴍᴜɴɴɪᴛʏ    ⚽", player.id, 0x61ddff, "bold", 0);        	
	// whisper("", player.id, 0x6e28b0, "bold", 0);	
	displayAdminMessage();
}

room.onPlayerLeave = function(player) {
	firmas.delete(player.name)
	announce(player.name + " foi tomado pelo anticódigo!",null, 0xeb2121, "normal", 0);
	displayAdminMessage();
}

room.onGameStart = function(byPlayer) {
	room.setTeamColors(2, 60, 0xFFFFFF, [0x0080FF, 0x004077, 0x002033]);
	room.setTeamColors(1, 60, 0xFFFFFF, [0xFF0000, 0x770101, 0x330000]);
	//countGoals = room.getPlayerList();
	
	if (map == "RSR") {
		if (byPlayer == null) {
			game = new Game();	
		}
		else {
			announce("Duração da partida é de " + gameTime + " minutos");
			room.stopGame();
			room.setTimeLimit(3);			
			room.startGame();
		}
	}
}

room.onGameStop = function(byPlayer) {
	if (map == "RSR") {
		if (byPlayer != null) {
			room.setTimeLimit(gameTime);
		}
	}

	autoplay();
}

room.onPlayerBallKick = function(player) {
	if (map == "RSR") {
		game.rsTouchTeam = player.team;
		game.updateLastKicker(player.id, player.name, player.team);
		// if (game.outStatus == "redThrow" || game.outStatus == "blueThrow") {
		// 	game.throwinKicked = true;
		// }
	}
}

room.onPlayerChat = function(player, message) {
	console.log(player.name + ": " + message);
	if (message.startsWith("!")) {
		message = message.substr(1);
		let args = message.split(" ");
		
		if (args[0] == "admin" && args.length == 1) {
			if (isAdminPresent() == false) {
				room.setPlayerAdmin(player.id, true);
			}
			else {
				whisper("Já existe um ADM!", player.id);
			}
		}
		else if (args[0] == "admin" && args.length == 2) {
			if (args[1] == adminCode) {
				room.setPlayerAdmin(player.id, true);
			}
		}
		else if (args[0] == "clearbans") {
			if (player.admin) {
				room.clearBans();
				announce("Bans removidos por " + player.name);
			}
			else {
				whisper("Este comando es solo para admins", player.id);
			}
		}
		else if (args[0] == "court" && args.length == 1) {
			whisper("Cor de fundo atual é " + mapBGColor);
		}
		else if (args[0] == "court" && args.length == 2 && player.admin) {
			if (room.getScores() == null) {
				if (args[1] == "reset") {
					mapBGColor = "86A578";
					announce("Fundo de mapa resetado por " + player.name);
				}
				else {
					mapBGColor = args[1];
					announce("Fundo de mapa = " + args[1] + " por " + player.name);
				}
				room.setCustomStadium(getRealSoccerMap());				
			}
			else {
				whisper("Partida em andamento", player.id);
			}
		}
		else if (args[0] == "swap") {
			if (player.admin) {
				if (args.length == 1) {
					var players = room.getPlayerList().filter((player) => player.id != 0 );
					if ( players.length == 0 ) return false;
					players.forEach(function(player) {	
						if (player.team == 1) {
							room.setPlayerTeam(player.id, 2);
						}
						if (player.team == 2) {
							room.setPlayerTeam(player.id, 1);
						}
					});
					announce("🔄 Troca de lado");
				}
			}
			else {
				whisper("Comando apenas para admins", player.id);
			}
		}
		else if(args[0] == "autoplay" && player.admin){
			if(args[1] == "1"){
				announce("Autoplay ativado!");
				autoPlayEnable = true;
				autoplay();
			}
			else{
				announce("Autoplay desativado!");
				autoPlayEnable = false;
			}
		}
		else if (args[0] == "setpassword" && player.admin) {
			if (player.admin) {
				room.setPassword(args[1]);
				roomPassword = args[1];
				announce("Contraseña cambiada por: " + player.name);
			}
			else {
				whisper("Solo los admins pueden cambiar la contraseña.", player.id);
			}
		}
		else if (args[0] == "clearpassword" && player.admin) {
			if (player.admin) {
				room.setPassword(null);
				roomPassword = null;
				announce("Contraseña borrada por: " + player.name);
			}
			else {
				whisper("Solo los admins pueden borrar la contraseña.", player.id);
			}
		}
		else if (args[0] == "rs" && player.admin) {
			if (room.getScores() == null) {
				room.setCustomStadium(getRealSoccerMap());
			}
			else {
				whisper("No puedes cambiar el mapa si esta la partida en curso.", player.id);
			}
		}
		else if (args[0] == "rr" && player.admin) {
			room.stopGame();
			room.startGame();
		}
		else if (args[0] == "bb" || args[0] == "nv") {
			room.kickPlayer(player.id, "Bye", false);
		}
		else if (args[0] == "firmas") {
			for(let firma of firmas) {
			announce("▪️ " + firma)
			}
		}			
		else if (args[0] == "help") {
			displayHelp(player.id, args[1]);
		}
		return false;
	}
	if (message.startsWith("t ")) {
		teamMsg = message.substring(1).trim();
		if (player.team == 1) {
			var players = room.getPlayerList().filter((player) => player.team == 1);
			players.forEach(function(teamPlayer) {
				room.sendAnnouncement("[Team] " + player.name + ": " + teamMsg, teamPlayer.id, 0xED6A5A, "normal", 1);
			});
		}
		if (player.team == 2) {
			var players = room.getPlayerList().filter((player) => player.team == 2);
			players.forEach(function(teamPlayer) {
				room.sendAnnouncement("[Team] " + player.name + ": " + teamMsg, teamPlayer.id, 0x5995ED, "normal", 1);
			});
		}
		if (player.team == 0) {
			var players = room.getPlayerList().filter((player) => player.team == 0);
			players.forEach(function(teamPlayer) {
				room.sendAnnouncement("[Spec] " + player.name + ": " + teamMsg, teamPlayer.id, 0xdee7fa, "normal", 1);
			});
		}
		return false;
	}
	if (message.startsWith("@@")) {
		message = message.substr(2).trim();
		if (message.indexOf(' ') !== -1) {
			let args = message.match(/^(\S+)\s(.*)/).slice(1);
			
			if (args.length > 1) {
				var pmMsg = args[1];
				var players = room.getPlayerList();
				var pmSent = false;
				players.forEach(function(pmPlayer) {
					if (pmPlayer.name === args[0] || pmPlayer.name === args[0].replace(/_/g, ' ')) {
						whisper("[PM > " + pmPlayer.name + "] " + player.name + ": " + pmMsg, player.id, 0xff20ff, "normal", 1);	
						whisper("[PM] " + player.name + ": " + pmMsg, pmPlayer.id, 0xff20ff, "normal", 1);
						pmSent = true;					
					}
				});
				if (pmSent == false) {
					whisper("Cannot find user '" + args[0] + "'", player.id, 0xff20ff, "normal", 1);
				}
				return false;
			}
		}			
	}
	if(message == "firmo") {
    room.sendAnnouncement('FIRMASTE CORRECTAMENTE', player.id, 0xFF0000, 'bold');
	firmas.add(player.name)
	}
}

function displayHelp(id, selection) {
	if (selection == null) {
		whisper("Comandos: !rs, !rr, !bb, !admin, !setpassword, !clearpassword, !clearbans, !swap, @@[player] [pm msg] , t [team chat msg], !court, !court [hexcolor], !court reset", id, null, "small");
	}
}

room.onTeamGoal = function(team) {
	updateBallSpeed();
	if (map == "RSR") {
		game.rsActive = false;
		
		let goalTime = secondsToMinutes(Math.floor(room.getScores().time));
		let scorer;
		let assister = "";
		let goalType;
		if (team == 1) {
			if (game.lastKickerTeam == 1) { 
				goalType = "GOAL!";
				scorer = "⚽" + game.lastKickerName;
				avatarCelebration(game.lastKickerId, "⚽");
				if (game.secondLastKickerTeam == 1 && game.lastKickerId != game.secondLastKickerId) {
					assister = " (Assist: " + game.secondLastKickerName + ")";
					avatarCelebration(game.secondLastKickerId, "🅰️");
				}
			}		
			if (game.lastKickerTeam == 2) { 
				goalType = "OWN GOAL!";
				scorer = "🐸" + game.lastKickerName;
				avatarCelebration(game.lastKickerId, "🐸");
				if (game.secondLastKickerTeam == 1) { // if owngoal was assisted
					assister = " (Assist: " + game.secondLastKickerName + ")";
					avatarCelebration(game.secondLastKickerId, "🅰️");
				}
			}
			game.redScore++;
		}
		if (team == 2) {
			if (game.lastKickerTeam == 2) { 
				goalType = "GOAL!";
				scorer = "⚽" + game.lastKickerName;
				avatarCelebration(game.lastKickerId, "⚽");
				if (game.secondLastKickerTeam == 2 && game.lastKickerId != game.secondLastKickerId) {
					assister = " (Assist: " + game.secondLastKickerName + ")";
					avatarCelebration(game.secondLastKickerId, "🅰️");
				}
			}		
			if (game.lastKickerTeam == 1) { 
				goalType = "OWN GOAL!";
				scorer = "🐸" + game.lastKickerName;
				avatarCelebration(game.lastKickerId, "🐸");
				if (game.secondLastKickerTeam == 2) {
					assister = " (Assist: " + game.secondLastKickerName + ")";
					avatarCelebration(game.secondLastKickerId, "🅰️");
				}
			}
			game.blueScore++;
		}
		announce(goalType + " 🟥 " + game.redScore + " - " + game.blueScore + " 🟦 🕒" + goalTime + " " + scorer + assister);
		game.lastKicker = undefined;
		game.secondLastKicker = undefined;
		game.lastKickerTeam = undefined;
		game.secondLastKickerTeam = undefined;
	}
}

room.onGameTick = function() {
	updateGameStatus();
	handleBallTouch();
}

function updateBallSpeed() {
	const currentBallPosition = room.getBallPosition();
	// console.log("pos atual: " + )
	if (currentBallPosition) {
		const vector = Math.sqrt(Math.pow(game.prevBallPosition.x - currentBallPosition.x, 2) + Math.pow(game.prevBallPosition.y - currentBallPosition.y, 2));
		const speed = vector * 60; // game tick is 1/60 of second

		game.ballSpeed = (parseFloat((speed / 100).toFixed(2)) * 3600) / 1000; // km/h
	}

	announce("⚽ Velocidade do gol: " + game.ballSpeed + "km/h ⚽");
	console.log('Ball speed: ' + game.ballSpeed + 'km/h');
}

function updateBallPosition() {
	game.prevBallPosition = room.getBallPosition();
}


function handleBallTouch() {
	var players = room.getPlayerList();
	var ballPosition = room.getBallPosition();
	var ballRadius = game.ballRadius;
	var playerRadius = 15;
	var triggerDistance = ballRadius + playerRadius + 0.01;
	
	for (var i = 0; i < players.length; i++) { 
		var player = players[i];
		if ( player.position == null ) continue;
		var distanceToBall = pointDistance(player.position, ballPosition);
		if ( distanceToBall < triggerDistance ) {				
			game.rsTouchTeam = player.team;
			game.throwinKicked = false;
			
			if (game.rsCorner == false && room.getDiscProperties(0).xgravity != 0) {
				room.setDiscProperties(0, {xgravity: 0, ygravity:0});
				game.rsSwingTimer = 10000;
			}
		}		
	}
}

function updateGameStatus() {
	game.time = Math.floor(room.getScores().time);
	game.ballRadius = room.getDiscProperties(0).radius;
	updateBallPosition();
}

function announce(msg, targetId, color, style, sound) {
	if (color == null) {
		color = 0xFFFD82;
	}
	if (style == null) {
		style = "bold";
	}
	if (sound == null) {
		sound = 0;
	}
	room.sendAnnouncement(msg, targetId, color, style, sound);
}

function whisper(msg, targetId, color, style, sound) {
	if (color == null) {
		color = 0x66C7FF;
	}
	if (style == null) {
		style = "normal";
	}
	if (sound == null) {
		sound = 0;
	}
	room.sendAnnouncement(msg, targetId, color, style, sound);
}

function isAdminPresent() {
	var players = room.getPlayerList();
	if (players.find((player) => player.admin) != null) {
		return true;
	}
	else {
		return false;
	}
}

function displayAdminMessage() {
	if (isAdminPresent() == false) {
		announce("Sem ADM's na sala, digite !admin para se tornar o ADM");
	}
}

function pointDistance(p1, p2) {
	var d1 = p1.x - p2.x;
	var d2 = p1.y - p2.y;
	return Math.sqrt(d1 * d1 + d2 * d2);
}

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function avatarCelebration(playerId, avatar) {
	room.setPlayerAvatar(playerId, avatar);
	sleep(250).then(() => {
		room.setPlayerAvatar(playerId, null);
	});
	sleep(500).then(() => {
		room.setPlayerAvatar(playerId, avatar);
	});
	sleep(750).then(() => {
		room.setPlayerAvatar(playerId, null);
	});
	sleep(1000).then(() => {
		room.setPlayerAvatar(playerId, avatar);
	});
	sleep(1250).then(() => {
		room.setPlayerAvatar(playerId, null);
	});
	sleep(1500).then(() => {
		room.setPlayerAvatar(playerId, avatar);
	});
	sleep(1750).then(() => {
		room.setPlayerAvatar(playerId, null);
	});
	sleep(2000).then(() => {
		room.setPlayerAvatar(playerId, avatar);
	});
	sleep(2250).then(() => {
		room.setPlayerAvatar(playerId, null);
	});
	sleep(2500).then(() => {
		room.setPlayerAvatar(playerId, avatar);
	});
	sleep(2750).then(() => {
		room.setPlayerAvatar(playerId, null);
	});
	sleep(3000).then(() => {
		room.setPlayerAvatar(playerId, avatar);
	});
	sleep(3250).then(() => {
		room.setPlayerAvatar(playerId, null);
	});
}

function secondsToMinutes(time) {
    var hrs = ~~(time / 3600);
    var mins = ~~((time % 3600) / 60);
    var secs = ~~time % 60;

    var ret = "";
    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }
    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
}

setInterval(function(){
    room.sendAnnouncement("⭐ Clayton adverte: EXPANDA! ⭐ ", null, 0xbfbc11, "normal", 0);
},14400)

function shuffle(array) {
	let currentIndex = array.length;
  
	while (currentIndex != 0) {
	  let randomIndex = Math.floor(Math.random() * currentIndex);
	  currentIndex--;
	  [array[currentIndex], array[randomIndex]] = [
		array[randomIndex], array[currentIndex]];
	}
}

function autoplay(){
	if(autoPlayEnable){
		let qualTime = 1;
		var players = room.getPlayerList();
		players.forEach(function(p){
			room.setPlayerTeam(p.id, 0);
		});
		let tamanho = players.length;
		shuffle(players);
		if ( tamanho == 0 ) return false;
		else if(tamanho % 2 == 1)
			tamanho--;
		for(let i=0; i < tamanho; i++){
			console.log(players[i].name);
			room.setPlayerTeam(players[i].id, qualTime + 1);
			qualTime = !qualTime;
		}

		room.startGame();
	}
}