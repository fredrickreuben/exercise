window.currentUser = { id: '19', name: 'Jane', email: 'jane@chameleon.io' };

// users are like authors and profiles like commentors
// open a modal with commentor info when clicked

...

export const  ActiveProfiles({ profiles, onLaunchProfile }) => {
  var active = [];

  for(i=0; i < profiles.length; i++) {
    if(!profiles[i].disabled && profiles[i]['last_seen_time'] > new Date(new Date().getTime()-(24*60*1000)).toISOString()) { // within the last 24 hours
      active.push(profiles[i]);
    }
  }
  
  if(active.length == 1 && active[0].email  === window.currentUser.email) {
    active.length = 0;
  }

  return (
    <div>
       {active.map(function(a) { return <div onClick={() => onLaunchProfile(a.name, a.email)}>{a.name} - {a.email}</div> })}
    </div>
  )
}
