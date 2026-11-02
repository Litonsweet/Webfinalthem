'use client'
import { useState, useEffect } from 'react'
import { themes as initialThemes, Theme } from './themes/themes.config'
import TradingView from './components/TradingView'
import AccountsView from './components/AccountsView'
import SocialCopyView from './components/SocialCopyView'
import WalletView from './components/WalletView'

export default function Page(){
  const [currentTheme,setCurrentTheme]=useState<Theme>(initialThemes[0])
  const [themes,setThemes]=useState<Theme[]>(initialThemes)
  const [activeView,setActiveView]=useState('W0')
  const [isAdmin,setIsAdmin]=useState(false)
  const [adminOk,setAdminOk]=useState(false)
  const [adminPass,setAdminPass]=useState('')
  const [balance,setBalance]=useState(42850.92)
  useEffect(()=>{ const s=localStorage.getItem('litonsweet-theme'); if(s){ const t=themes.find(x=>x.id===s); if(t) setCurrentTheme(t) } },[])
  const selectTheme=(t:Theme)=>{ setCurrentTheme(t); localStorage.setItem('litonsweet-theme',t.id) }
  return (
    <div style={{background:currentTheme.bg,minHeight:'100vh',color:'white',fontFamily:'Space Grotesk'}}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&display=swap'); .rainbow{background:linear-gradient(90deg,#FCD535,#FF8A00,#9D4EDD,#22D3EE);-webkit-background-clip:text;-webkit-text-fill-color:transparent;}`}</style>
      <header style={{height:56,borderBottom:'1px solid rgba(255,255,255,0.08)',display:'flex',justifyContent:'space-between',padding:'0 16px',alignItems:'center',background:'rgba(0,0,0,0.3)'}}>
        <div><span className="rainbow" style={{fontWeight:800}}>Litonsweet Forex Multi System</span> <span style={{fontSize:10,background:'rgba(255,255,255,0.1)',padding:'2px 6px',borderRadius:8}}>LS-882914</span> <span style={{fontSize:10,background:'#0A1F14',color:'#00FF87',padding:'2px 6px',borderRadius:8}}>W0 Home - ${balance.toFixed(2)} REAL - Theme 20 Gold Rush ID gold-rush Save litonsweet-theme Default Protected</span></div>
        <button onClick={()=>setIsAdmin(!isAdmin)} style={{padding:'6px 12px',borderRadius:20,background:isAdmin?'linear-gradient(90deg,#FCD535,#FF8A00)':'rgba(255,255,255,0.1)',color:isAdmin?'black':'white'}}>{isAdmin?'👑 Admin':'👤 User'}</button>
      </header>
      <div style={{display:'flex'}}>
        <aside style={{width:260,borderRight:'1px solid rgba(255,255,255,0.08)',padding:12,minHeight:'calc(100vh - 56px)'}}>
          {[
            {id:'W0',label:'W0 Home Page',icon:'🏠',file:'HomeView.tsx'},
            {id:'W1',label:'W1 Login/Register',icon:'🔐',file:'LoginView.tsx'},
            {id:'W2',label:'W2 Our Theme Theme 20 Gold Rush',icon:'🎨',file:'ThemeChangerView.tsx + themes.config.ts SEPARATE SAFE',middle:true},
            {id:'W3',label:'W3 Admin Panel',icon:'⚙️',file:'AdminView.tsx'},
            {id:'F3',label:'F3 Trading',icon:'📈',file:'TradingView.tsx'},
            {id:'F4',label:'F4-F5 Accounts',icon:'👥',file:'AccountsView.tsx'},
            {id:'F6',label:'F6 Social Copy MOST COMPLEX',icon:'🚀',file:'SocialCopyView.tsx'},
            {id:'F9',label:'F9 Wallet',icon:'💰',file:'WalletView.tsx'},
          ].map(m=>(
            <div key={m.id} onClick={()=>setActiveView(m.id)} style={{padding:'10px 12px',borderRadius:12,marginBottom:6,cursor:'pointer',background:activeView===m.id?'rgba(255,255,255,0.08)':'transparent',border:'1px solid rgba(255,255,255,0.08)'}}>
              <div style={{display:'flex',gap:8,flexDirection:'column'}}><div style={{display:'flex',gap:8}}><span>{m.icon}</span><span>{m.label} {m.middle && <span style={{fontSize:8,background:'#FCD535',color:'black',padding:'1px 4px',borderRadius:4}}>MIDDLE</span>}</span></div><div style={{fontSize:8,opacity:0.6}}>{m.file}</div></div>
            </div>
          ))}
        </aside>
        <main style={{flex:1,padding:16}}>
          {activeView==='W0' && <div><h1>W0 Home Page - Web Home - / - HomeView.tsx - Landing - Logo Rainbow + Balance Count-Up + TradingView Chart BUY/SELL - LS-882914 - Theme 20 Gold Rush ID gold-rush Save litonsweet-theme Default Protected Lock - Exness Web Social + Litonsweet A+B Theme Miliye Design</h1><TradingView balance={balance} currentTheme={currentTheme}/><AccountsView currentTheme={currentTheme}/><SocialCopyView currentTheme={currentTheme}/></div>}
          {activeView==='W1' && <div style={{background:currentTheme.card,padding:24,borderRadius:20}}><h1>W1 Login / Register - /login - LoginView.tsx - Login - Email Pass + MetaID Trading Investor + Server Litonsweet-Real-882914 - Exness Login Design</h1><input placeholder="Email" style={{width:'100%',padding:12,borderRadius:12,marginTop:12,background:'#08080A',color:'white'}}/><input placeholder="Password" type="password" style={{width:'100%',padding:12,borderRadius:12,marginTop:8,background:'#08080A',color:'white'}}/><button style={{width:'100%',padding:12,borderRadius:12,marginTop:12,background:'linear-gradient(90deg,#FCD535,#FF8A00)',color:'black'}}>Login - W1</button></div>}
          {activeView==='W2' && <div><h1>W2 Our Theme - Theme 20 Gold Rush - /themes - ThemeChangerView.tsx + themes.config.ts SEPARATE SAFE - 10 Themes Save litonsweet-theme - Theme 20 Default Protected Lock ID gold-rush - Screenshot Exact - Client Choice - Click to Change Full Website Theme - Web Design Same Only Colors/Gradients Change</h1><div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))',gap:12,marginTop:12}}>{themes.map(t=>(<div key={t.id} onClick={()=>selectTheme(t)} style={{background:t.card,borderRadius:20,padding:16,border:currentTheme.id===t.id?'2px solid #FCD535':'1px solid rgba(255,255,255,0.08)',cursor:'pointer'}}><div style={{height:40,background:`linear-gradient(90deg,${t.gradient.join(',')})`,borderRadius:12,marginBottom:12}}/><div>{t.icon} {t.name} - {t.mood} - {t.badge} {currentTheme.id===t.id && '✓ Active'} {t.isDefault && '👑 Default Protected'} - ID {t.id} - Save litonsweet-theme</div></div>))}</div></div>}
          {activeView==='W3' && <div style={{background:currentTheme.card,padding:16,borderRadius:20}}><h1>W3 Admin Panel - /admin - AdminView.tsx - Password Litonsweet@882914 - Theme On Off Delete Add Edit + Default Crown + All Controllers - GitHub Theme File Separate - File Separate Safe</h1>{!adminOk ? <div><input type="password" value={adminPass} onChange={e=>setAdminPass(e.target.value)} placeholder="Litonsweet@882914" style={{width:'100%',padding:12,borderRadius:12,marginTop:12,background:'#08080A',color:'white'}}/><button onClick={()=>{if(adminPass==='Litonsweet@882914') setAdminOk(true); else alert('Wrong')}} style={{width:'100%',padding:12,borderRadius:12,marginTop:12,background:'linear-gradient(90deg,#FCD535,#FF8A00)',color:'black'}}>Login W3 Admin</button></div> : <div>Admin OK - Theme On Off Delete Add Edit + Default Crown - All Controllers - W3</div>}</div>}
          {activeView==='F3' && <TradingView balance={balance} currentTheme={currentTheme}/>}
          {activeView==='F4' && <AccountsView currentTheme={currentTheme}/>}
          {activeView==='F6' && <SocialCopyView currentTheme={currentTheme}/>}
          {activeView==='F9' && <WalletView currentTheme={currentTheme}/>}
        </main>
      </div>
    </div>
  )
}
