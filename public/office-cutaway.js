const ink = '#263e63';
const blue = '#145cff';
const paper = '#fbfaf6';

function project([x, y, z = 0]) {
  return [x - .64 * y, .24 * x + .34 * y - z].map(value => value.toFixed(2)).join(',');
}

function polygon(points, fill = 'none', stroke = ink, weight = 1.05) {
  return `<polygon points="${points.map(project).join(' ')}" fill="${fill}" stroke="${stroke}" stroke-width="${weight}" stroke-linejoin="round"/>`;
}

function line(points, stroke = ink, weight = .85, dashed = false) {
  return `<polyline points="${points.map(project).join(' ')}" fill="none" stroke="${stroke}" stroke-width="${weight}" stroke-linecap="round" stroke-linejoin="round"${dashed ? ' stroke-dasharray="5 4"' : ''}/>`;
}

function rectangle(x, y, z, width, depth, fill, stroke = ink) {
  return polygon([[x,y,z],[x+width,y,z],[x+width,y+depth,z],[x,y+depth,z]], fill, stroke);
}

function box(x, y, z, width, depth, height, top, face = '#dce6f3', side = '#edf2f8') {
  const right = x + width;
  const front = y + depth;
  const high = z + height;
  return polygon([[x,front,z],[right,front,z],[right,front,high],[x,front,high]], face)
    + polygon([[right,y,z],[right,front,z],[right,front,high],[right,y,high]], side)
    + rectangle(x, y, high, width, depth, top);
}

function wall(x, y, width, height, fill) {
  return polygon([[x,y,0],[x+width,y,0],[x+width,y,height],[x,y,height]], fill);
}

function workstation(x, y, facing) {
  const front = facing === 'front';
  const monitor = y + (front ? 2 : 12);
  const keyboard = y + (front ? 10 : 5);
  const chair = y + (front ? 19 : -11);
  return `<g class="floorplan-desk">
    ${line([[x+3,y+12,0],[x+3,y+12,12]], ink, .9)}
    ${line([[x+21,y+12,0],[x+21,y+12,12]], ink, .9)}
    ${box(x,y,12,24,16,2,'#fffdf8','#dfebf8','#eff4fb')}
    ${box(x+4,monitor,14,12,2,8,'#799bfb',blue,'#a9c2ff')}
    ${rectangle(x+4,keyboard,14,10,2.8,'#dce7f4',ink)}
    ${box(x+8,chair,0,10,8,6,'#e6eefb','#c9d8ef','#e1ebfa')}
  </g>`;
}

function rack(x, y, height, accented) {
  const slots = Array.from({length: 6}, (_, index) => {
    const z = 6 + index * ((height-10) / 6);
    return polygon([[x+3,y+20,z],[x+21,y+20,z],[x+21,y+20,z+4],[x+3,y+20,z+4]], accented ? '#8eb3ff' : '#9bb2cf');
  }).join('');
  return box(x,y,0,24,20,height,'#e6eef9','#c3d3ea','#dbe6f4') + slots;
}

function sideWall(x, y, depth, height, fill) {
  return polygon([[x,y,0],[x,y+depth,0],[x,y+depth,height],[x,y,height]], fill);
}

function glazing(x, y, width, height) {
  return wall(x,y,width,height,'#dbeaff38')
    + line([[x,y,height],[x+width,y,height]], '#6d8fb8')
    + line([[x+width/2,y,0],[x+width/2,y,height]], '#8aa2be');
}

function meetingRoom() {
  const x = layout.roomX;
  const right = layout.roomRight;
  const y = layout.meetingY;
  const front = layout.meetingFront;
  const seats = [x+53,x+81,x+109].map(left => (
    box(left,y+34,0,14,11,8,'#cad9ec')
    + box(left,y+87,0,14,11,8,'#cad9ec')
  )).join('');
  return rectangle(x,y,0,right-x,front-y,'#eaf2fc','#6886aa')
    + glazing(x,y,right-x,54)
    + sideWall(right,y,front-y,54,'#dde9fb84')
    + sideWall(x,y,64,51,'#dbeaff49')
    + sideWall(x,y+94,front-y-94,27,'#dbeaff49')
    + wall(x,front,right-x,16,'#dbeaff49')
    + polygon([[x+1,y+64,0],[x+20,y+77,0],[x+20,y+77,48],[x+1,y+64,48]],'#e5f0ff5e','#6886aa')
    + line([[x+8,y+71,23],[x+13,y+74,23]],ink,1.3)
    + polygon([[x+52,y+.5,27],[x+110,y+.5,27],[x+110,y+.5,45],[x+52,y+.5,45]],'#4a668c')
    + seats
    + box(x+31,y+61,0,11,14,8,'#cad9ec')
    + box(x+136,y+61,0,11,14,8,'#cad9ec')
    + box(x+47,y+50,12,84,30,4,'#f7e7d5','#cfb9a0','#e7d5bf')
    + rectangle(x+83,y+63,16,13,6,'#adbfda');
}

const layout = {
  width: 526, depth: 316, floorGap: 306,
  roomX: 332, roomRight: 510, meetingY: 17, meetingFront: 128,
  itY: 182, itFront: 293, aisleX: 287, crossAisleY: 137
};
const podRows = [61, 163];
const deskPods = [35, 124, 213];
const switchPosition = [467, 197, 29];
const riserPosition = [517, 197, 29];
const firewallPosition = [467, 239, 23];
const cameraPosition = [266, 7, 47];
const serverPosition = [365, 204, 38];
const storagePosition = [406, 204, 34];
const recorderPosition = [365, 255, 15];
const readerPosition = [307, 298, 18];
const controllerPosition = [349, 270, 18];
const lockPosition = [328, 300, 11];

function floorLabel(x, y, text, kind = '') {
  return `<text x="${x}" y="${y}" class="cutaway-label ${kind}">${text}</text>`;
}

function locationLabel(point, text, dx = 0, dy = 0) {
  const [x,y] = project(point).split(',').map(Number);
  return floorLabel(x+dx,y+dy,text,'cutaway-small-label');
}

function breakoutArea() {
  return rectangle(28,240,0,134,61,'#e6eee9','#a0b2aa')
    + box(38,254,0,53,17,12,'#a9c1bd','#91aca8')
    + box(38,250,10,53,5,9,'#a9c1bd','#91aca8')
    + box(119,270,0,22,17,10,'#c9d7ce')
    + box(83,276,0,23,13,7,'#f3e4d1')
    + box(139,247,0,12,12,14,'#8eaa9a');
}

function workstations() {
  const stations = [];
  for (const row of podRows) {
    for (const pod of deskPods) {
      for (const offset of [0,27]) {
        stations.push({x:pod+offset,y:row,facing:'back'});
        stations.push({x:pod+offset,y:row+18,facing:'front'});
      }
    }
  }
  stations.push({x:226,y:246,facing:'front'});
  stations.sort((a,b) => .24 * (a.x-b.x) + .34 * (a.y-b.y));
  return stations.map(({x,y,facing}) => workstation(x,y,facing)).join('');
}

function switchingRoutes(hasMeeting) {
  const {aisleX, crossAisleY} = layout;
  const trunk = line([[36,crossAisleY,1],[aisleX,crossAisleY,1],[aisleX,230,1],[467,230,1],[467,197,1],switchPosition], blue, 2.4);
  const drops = deskPods.map(x => line([[x+26,77,1],[x+26,181,1]], blue, 1.55)).join('');
  const singleDesk = line([[237,248,1],[aisleX,248,1],[aisleX,230,1]], blue, 1.6);
  const meetingDrop = hasMeeting
    ? line([[412,67,14],[412,67,1],[319,67,1],[319,crossAisleY,1],[aisleX,crossAisleY,1]], blue, 1.8)
    : '';
  return `<g class="cutaway-route route-network">${trunk}${drops}${singleDesk}${meetingDrop}</g>`;
}

function cloudNode() {
  return `<g class="cutaway-cloud" transform="translate(100 20)">
    <path d="M504 106h-51c-12 0-21-8-21-19 0-10 8-19 18-20 5-13 17-21 31-21 16 0 30 10 34 25 11 1 19 8 19 18 0 10-9 17-20 17z" fill="#e7efff" stroke="${ink}" stroke-width="1.2"/>
    ${floorLabel(483,85,'Cloud','cutaway-small-label')}
  </g>`;
}

function itRoom() {
  const {roomX:x,roomRight:right,itY:y,itFront:front} = layout;
  return rectangle(x,y,0,right-x,front-y,'#e4edf8','#6886aa')
    + wall(x,y,right-x,21,'#dce6f3')
    + sideWall(right,y,front-y,23,'#e2ebf6')
    + sideWall(x,y,61,34,'#e2ebf6')
    + sideWall(x,y+97,front-y-97,22,'#e2ebf6')
    + wall(x,front,right-x,10,'#d4e1f1')
    + polygon([[x+1,y+62,0],[x+19,y+77,0],[x+19,y+77,36],[x+1,y+62,36]],'#ebf1fb8c','#6886aa');
}

function floor(level, active, offset) {
  const {width,depth,roomX,roomRight,meetingY,meetingFront,aisleX} = layout;
  const base = level === 1;
  const hasMeeting = base && active.has('meeting');
  const hasServers = base && active.has('servers');
  const hasCamera = active.has('cctv');
  const hasAccess = base && active.has('access');
  const windows = Array.from({length: 7}, (_, index) => {
    const x = 11 + index*45;
    return polygon([[x,0,17],[x+38,0,17],[x+38,0,53],[x,0,53]], '#e8f0fc','#718bad',.8);
  }).join('');
  const equipment = hasServers ? rack(353,188,38,true) + rack(394,188,34,true) : '';
  const externalRoute = base ? `<g class="cutaway-route route-cloud">
    ${line([switchPosition,[467,218,25],firewallPosition],blue,2.3)}
    <polyline points="${project(firewallPosition)} 500,170 517,170 517,108 533,108" fill="none" stroke="${blue}" stroke-width="2.2" stroke-dasharray="5 4"/>
    ${hasServers ? line([switchPosition,[446,217,29],[365,217,29],serverPosition],blue,2.1) + line([serverPosition,[365,226,23],[406,226,23],storagePosition],blue,2.1) : ''}
    ${floorLabel(523,151,'Internet','cutaway-small-label')}
  </g>` : '';
  const cameraLine = hasCamera
    ? line([cameraPosition,[266,7,1],[aisleX,137,1],[aisleX,230,1],[467,230,1],[467,197,1],switchPosition],blue,2.1) : '';
  const recorderLine = base && hasCamera
    ? line([switchPosition,[447,226,16],[365,226,16],recorderPosition],blue,2.1) : '';
  const accessLines = hasAccess
    ? line([readerPosition,[307,270,18],controllerPosition,[349,300,11],lockPosition],blue,2.1)
      + line([controllerPosition,[430,270,18],[430,207,18],switchPosition],blue,1.4,true) : '';
  const collaboration = hasMeeting
    ? meetingRoom()
    : rectangle(roomX,meetingY,0,roomRight-roomX,meetingFront-meetingY,'#f2eee6','#a7a398')
      + box(375,54,0,78,29,12,'#f1dfc8') + box(380,98,0,30,15,10,'#b5c9cf')
      + box(423,98,0,30,15,10,'#b5c9cf') + box(476,31,0,13,13,14,'#8eaa9a');

  return `<g class="cutaway-floor" data-office-floor="${level}" transform="translate(0 ${offset})">
    ${box(0,0,-9,width,depth,9,paper,'#ccd9ec','#dce6f5')}
    ${wall(0,0,width,62,'#f4f7fc')}${windows}
    ${sideWall(0,0,57,62,'#eef3fa')}
    ${rectangle(18,40,0,258,62,'#f2f5fa','none')}
    ${rectangle(18,142,0,258,62,'#f2f5fa','none')}
    ${rectangle(283,15,0,45,280,'#f2ebe0','none')}
    ${line([[283,15,1],[283,298,1]],'#a69b88',.9)}
    ${line([[328,15,1],[328,298,1]],'#a69b88',.9)}
    ${collaboration}${itRoom()}${breakoutArea()}
    ${switchingRoutes(hasMeeting)}${externalRoute}
    <g class="cutaway-route route-security">${cameraLine}${recorderLine}${accessLines}</g>
    ${workstations()}
    ${rack(455,187,29,false)}
    ${base ? box(454,232,0,26,14,23,'#d3e1fa','#8fa9d5') : ''}
    ${equipment}
    ${base && hasCamera ? box(352,248,0,26,14,15,'#d8e8ff','#9bb9e7') : ''}
    ${hasCamera ? box(260,4,41,12,8,6,'#b7cfff',blue,'#9dbfff') : ''}
    ${hasAccess ? box(302,294,0,10,8,18,'#a7c5ff') + box(343,265,0,12,10,18,'#c7dbff') + box(323,296,0,10,8,11,'#d9e8ff') : ''}
    <g class="cutaway-route route-network route-uplink">${line([switchPosition,riserPosition],blue,2.3)}</g>
    ${floorLabel(-183,19,'Floor '+level,'cutaway-floor-label')}
    ${floorLabel(-183,37,'25 desks','cutaway-floor-sub')}
    ${locationLabel([70,297,1],'Breakout area',-18,6)}
    ${locationLabel([304,265,1],'Corridor',-27,8)}
    <path d="M423 44v24" fill="none" stroke="#6886aa" stroke-width=".9"/>
    ${floorLabel(374,39,hasMeeting ? 'Meeting room' : 'Collaboration area','cutaway-small-label')}
    ${locationLabel([452,291,0],base ? 'IT room' : 'Network closet',-5,0)}
    ${locationLabel(switchPosition,'Switch',9,-6)}
    ${base ? locationLabel(firewallPosition,'Firewall',9,3) + cloudNode() : ''}
    ${hasServers ? locationLabel(serverPosition,'Server',-35,-5) + locationLabel(storagePosition,'Storage',-18,12) : ''}
    ${hasCamera ? locationLabel(cameraPosition,'Camera',-8,-9) : ''}
    ${base && hasCamera ? locationLabel(recorderPosition,'Recorder',-36,12) : ''}
    ${hasAccess ? locationLabel(readerPosition,'Door reader',-40,14) : ''}
  </g>`;
}

export function officeCutaway(seats, active) {
  const levelCount = seats / 25;
  const levelOffsets = Array.from({length: levelCount}, (_, index) => index * layout.floorGap);
  const [riserX, riserY] = project(riserPosition).split(',').map(Number);
  const lastFloor = levelOffsets.at(-1);
  const riser = levelCount > 1 ? `<g class="cutaway-route route-network cutaway-riser">
    <path d="M${riserX} ${riserY}V${riserY + lastFloor}" stroke="${blue}" stroke-width="2.5" stroke-dasharray="7 5"/>
    ${levelOffsets.map(offset => `<circle cx="${riserX}" cy="${riserY+offset}" r="4" fill="${blue}"/>`).join('')}
    ${floorLabel(riserX+13,riserY+layout.floorGap*.36,'Cable riser','cutaway-small-label')}
  </g>` : '';
  return `<svg class="floorplan-cutaway" viewBox="-213 -67 859 ${lastFloor + 311}" aria-hidden="true">
    ${levelOffsets.map((offset,index) => floor(levelCount-index,active,offset)).join('')}
    ${riser}
  </svg>`;
}
