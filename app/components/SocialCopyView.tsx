// F6 Social Copy - Exness Social Platform + Litonsweet Combined 2 Miliye - Master Strategy Circle + MT5 Tester - MOST COMPLEX - W0 Home + F6 Menu - File Separate - MOST COMPLEX - Complete hole alada - LS-882914
'use client'
import {useState} from 'react'
export default function SocialCopyView({currentTheme}:{currentTheme:any}){
  const [selected,setSelected]=useState<any>(null)
  const equity=[100,105,108,112,115,130,145,160,168]
  return (
    <div style={{marginTop:12}}>
      <h2>F6 Social Copy - Exness Social Platform + Litonsweet Combined 2 Miliye - Master Strategy Circle + MT5 Tester - MOST COMPLEX - W0 Home + F6 Menu - SocialCopyView.tsx - Top 10/100 USD/Cent Masters Filter - Master Cards Return Win Risk Score Copiers Star Rocket - Click Journey Window Aurora X Pro Equity Curve Drawdown Volume Circle Pie 3D EURUSD 40% Trading Map MT5 Data Server Leverage Trades MQL5 Image Tester Report Video 245% Profit 12% DD Live Trades Table CLOSE ALL + Per Trade CLOSE + Mini Chart Monthly Returns Calendar Volume Heatmap Risk Analysis - Exness মতো Circle + MT5 মতো Tester Design - LS-882914</h2>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))',gap:12,marginTop:12}}>
        {[1,2,3,4].map(i=>(
          <div key={i} onClick={()=>setSelected({name:'Aurora X Pro'})} style={{background:currentTheme.card,borderRadius:16,padding:12,border:'1px solid rgba(255,255,255,0.08)',cursor:'pointer'}}>
            <div style={{fontWeight:700}}>Aurora X Pro {i} - A+B-Master-882914 -> Litonsweet-Master-882914 - TS-882914 -> LS-882914 - 1240 Followers - Win 78% - $12,450 Profit - Risk 3/10 - F6</div>
            <div style={{height:40,marginTop:8,background:'rgba(0,0,0,0.3)',borderRadius:8,display:'flex',alignItems:'end',gap:2,padding:4}}>{equity.map((v,ii)=><div key={ii} style={{flex:1,height:`${(v-90)/80*30}px`,background:'#FCD535',borderRadius:2}}/>)}</div>
          </div>
        ))}
      </div>
      {selected && (
        <div style={{marginTop:16,background:'#0E0E14',borderRadius:20,padding:16,border:'1px solid rgba(255,255,255,0.1)'}}>
          <h3>Master Strategy Window - Aurora X Pro - Equity Curve Drawdown Volume Circle Pie 3D Trading Map MT5 Data MQL5 Image Tester Report Video 245% Profit 12% DD Live Trades Table CLOSE ALL + Per Trade CLOSE + Mini Chart Monthly Returns Calendar Volume Heatmap Risk Analysis - Exness মতো + MT5 মতো Design - F6 - Exness Web Social + Theme 20 Gold Rush - Ever Complete</h3>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12,marginTop:12}}>
            <div style={{background:'#12121A',borderRadius:16,padding:12}}>Equity Curve Grow 1.5s Draw + Drawdown Shaded - TradingView + MT5 Tester Equity Graph Style - F6</div>
            <div style={{background:'#12121A',borderRadius:16,padding:12}}>Volume Circle Pie 3D Tilt Spin 3s - EURUSD 40% GBPUSD 25% XAUUSD 20% Others 15% - Exness Strategy Circle Design - F6</div>
          </div>
        </div>
      )}
    </div>
  )
}
