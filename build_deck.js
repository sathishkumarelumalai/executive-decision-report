const pptxgen=require('pptxgenjs');
const p=new pptxgen(); p.layout='LAYOUT_16x9'; p.title='Executive Decision Report'; p.author='YOUR NAME';
const NAVY='1F4E79',GREEN='2E9E6B',RED='C0392B',GREY='595959',LIGHT='EEF3F8',F='Calibri';
const CH='./charts/';
let n=0;
function slide(title,sub){
  const s=p.addSlide(); n++; s.background={color:'FFFFFF'};
  s.addShape(p.ShapeType.rect,{x:0,y:0,w:10,h:0.12,fill:{color:NAVY},line:{color:NAVY}});
  s.addText(title,{x:0.5,y:0.3,w:9,h:0.9,fontFace:F,fontSize:24,bold:true,color:NAVY,valign:'top',isTextBox:true,margin:0});
  if(sub) s.addText(sub,{x:0.5,y:1.2,w:9,h:0.3,fontFace:F,fontSize:12,italic:true,color:GREY,isTextBox:true,margin:0});
  s.addText(`Executive Decision Report  |  ${n}`,{x:0.5,y:5.25,w:9,h:0.25,fontFace:F,fontSize:9,color:GREY,align:'right',isTextBox:true,margin:0});
  return s;
}
function box(s,x,y,w,h,head,lines,col,fs){
  s.addShape(p.ShapeType.rect,{x,y,w,h,fill:{color:LIGHT},line:{color:LIGHT}});
  s.addShape(p.ShapeType.rect,{x,y,w:0.07,h,fill:{color:col||NAVY},line:{color:col||NAVY}});
  s.addText(head,{x:x+0.2,y:y+0.1,w:w-0.3,h:0.35,fontFace:F,fontSize:14,bold:true,color:col||NAVY,isTextBox:true,margin:0});
  s.addText(lines.map((t,i)=>({text:t,options:{bullet:true,breakLine:i<lines.length-1}})),{x:x+0.2,y:y+0.5,w:w-0.3,h:h-0.6,fontFace:F,fontSize:fs||12,color:'333333',valign:'top',paraSpaceAfter:5,isTextBox:true,margin:0});
}
const img=(s,f,x,y,w,h)=>s.addImage({path:CH+f,x,y,w,h,sizing:{type:'contain',w,h}});
// 1
let s=p.addSlide(); n++; s.background={color:NAVY};
s.addText('Executive Decision Report',{x:0.7,y:1.5,w:8.6,h:1,fontFace:F,fontSize:40,bold:true,color:'FFFFFF',isTextBox:true,margin:0});
s.addText('Business Intelligence Capstone: Profit Growth Strategy from Sales Analytics',{x:0.7,y:2.6,w:8.6,h:0.5,fontFace:F,fontSize:18,color:'DDE6EF',isTextBox:true,margin:0});
s.addText('Prepared by: YOUR NAME   |   Date: DD-MM-YYYY',{x:0.7,y:4.3,w:8.6,h:0.4,fontFace:F,fontSize:14,color:'DDE6EF',isTextBox:true,margin:0});
// 2
s=slide('Executive summary: fixing discounts and scaling South can add about $43K profit a year');
box(s,0.5,1.4,2.9,3.7,'Key findings',['Revenue $3.36M, margin 17.0%, up 4.6% in 2025','Orders with discounts above 20% lose $40 each on average','South earns 35% of revenue; top 20% of customers earn 37%']);
box(s,3.55,1.4,2.9,3.7,'Recommendations',['R1: Cap discounts at 20% with approval rules','R2: Scale the South region playbook','R3: Launch a top-customer retention programme'],GREEN);
box(s,6.6,1.4,2.9,3.7,'Expected impact',['Gain: $43.3K per year','Investment: $15.1K','Blended ROI: 187%, payback 4.2 months'],RED);
// 3
s=slide('Business context: growth is slow and discounting is eroding margin');
box(s,0.5,1.4,4.4,3.6,'Situation',['Revenue was $1.11M in 2023, $1.10M in 2024, $1.15M in 2025','19.5% of orders lose money','Profit is spread unevenly across regions and customers']);
box(s,5.1,1.4,4.4,3.6,'Objectives',['Stop margin leakage from discounting','Grow profit in the strongest region','Protect revenue from the top customers','Decision: approve a three-part, $15.1K plan']);
// 4
s=slide('Methodology: 4,000 orders over 36 months analysed in Python');
box(s,0.5,1.4,2.9,3.6,'Data',['Sample sales dataset, 4,000 orders','696 customers, 4 regions, 3 categories','Jan 2023 to Dec 2025']);
box(s,3.55,1.4,2.9,3.6,'Preparation',['Duplicates removed','Dates parsed, missing values dropped','Margin % and month fields derived']);
box(s,6.6,1.4,2.9,3.6,'Techniques',['KPI and trend analysis','Segmentation by region, category, customer','Three-scenario ROI modelling']);
// 5 KPI + native chart
s=slide('Performance snapshot: $3.36M revenue at a 17.0% margin, up 4.6% in 2025');
[['Revenue','$3.36M'],['Profit','$0.57M'],['Margin','17.0%'],['Growth 2025','+4.6%']].forEach((k,i)=>{
  const x=0.5+i*2.3; s.addShape(p.ShapeType.rect,{x,y:1.5,w:2.1,h:1.2,fill:{color:LIGHT},line:{color:LIGHT}});
  s.addText(k[1],{x,y:1.55,w:2.1,h:0.7,fontFace:F,fontSize:28,bold:true,color:NAVY,align:'center',isTextBox:true,margin:0});
  s.addText(k[0],{x,y:2.2,w:2.1,h:0.4,fontFace:F,fontSize:13,color:GREY,align:'center',isTextBox:true,margin:0});});
s.addChart(p.charts.BAR,[{name:'Revenue ($K)',labels:['2023','2024','2025'],values:[1109,1098,1149]}],{x:0.5,y:2.85,w:9,h:2.3,barDir:'col',chartColors:[NAVY],showTitle:true,title:'Annual revenue ($K)',titleFontSize:12,titleColor:GREY,showValue:true,dataLabelPosition:'outEnd',dataLabelFontSize:11,showLegend:false,catAxisLabelFontSize:11,valAxisHidden:true,valGridLine:{style:'none'},valAxisMinVal:0});
// 6
s=slide('Revenue driver 1: South and Office Supplies carry the business');
img(s,'02_region_category.png',0.5,1.3,9,3.0);
box(s,0.5,4.3,9,0.85,'So what?',['South earns 35% of revenue and Office Supplies 52%: protect both and copy the South playbook elsewhere.'],NAVY,11);
// 7
s=slide('Revenue driver 2: monthly revenue is volatile with no clear upward trend');
img(s,'01_revenue_trend.png',0.5,1.4,5.6,3.7);
box(s,6.3,1.4,3.2,3.7,'So what?',['Annual revenue moved -1.0% then +4.6%','Growth is not coming from volume alone','Margin and mix are the levers to pull']);
// 8
s=slide('Revenue driver 3: the top 20% of customers generate 37% of revenue');
s.addChart(p.charts.DOUGHNUT,[{name:'Share',labels:['Top 20% customers','Other 80%'],values:[37.2,62.8]}],{x:0.5,y:1.4,w:5.6,h:3.7,chartColors:[NAVY,'7F8FA3'],showPercent:true,showLegend:true,legendPos:'b',legendFontSize:11,dataLabelColor:'FFFFFF',dataLabelFontSize:12,holeSize:55,showTitle:true,title:'Share of revenue',titleFontSize:12,titleColor:GREY});
box(s,6.3,1.4,3.2,3.7,'So what?',['Concentration is moderate, not extreme','About 139 customers drive $1.25M','Retention here has a high payoff']);
// 9
s=slide('Risk areas: deep discounts put about $33K of profit at risk');
box(s,0.5,1.4,4.4,1.7,'Margin leakage',['823 orders with discount above 20% lose $40 each on average, $33.0K in total'],RED);
box(s,5.1,1.4,4.4,1.7,'Loss-making orders',['19.5% of all orders lose money, a $34.6K drag on profit'],RED);
box(s,0.5,3.3,4.4,1.7,'Concentration',['South is 35% of revenue; the top 20% of customers are 37%'],RED);
box(s,5.1,3.3,4.4,1.7,'Data limitations',['Sample data over 36 months; costs and uplift rates are assumptions'],RED);
// 10-12
const recs=[
['Recommendation 1: cap discounts at 20% and require approval above it',['Set a 20% hard cap in the order system','Manager approval for exceptions','Review discount use monthly'],['823 orders above 20% lose $40 each on average','Removing half of those losses is realistic','Cheap to implement, fast to prove'],['Annual gain: $17.1K','Investment: $3.4K','ROI: 408%, payback 2.4 months']],
['Recommendation 2: scale the South region playbook to other regions',['Document what South does differently','Pilot in East, then North and West','Add targeted sales capacity'],['South profit is $196K, the largest region','An 8% profit lift is a modest target','Proven model reduces execution risk'],['Annual gain: $15.7K','Investment: $6.7K','ROI: 133%, payback 5.1 months']],
['Recommendation 3: launch a retention programme for the top 20% of customers',['Name an account owner per top customer','Loyalty pricing without deep discounts','Quarterly business reviews'],['Top 20% give 37% of revenue','A 5% profit uplift on this group is conservative','Retention costs less than acquisition'],['Annual gain: $10.6K','Investment: $5.0K','ROI: 111%, payback 5.7 months']]];
recs.forEach(r=>{ s=slide(r[0]);
  box(s,0.5,1.4,2.9,3.7,'Action',r[1],GREEN); box(s,3.55,1.4,2.9,3.7,'Rationale',r[2]); box(s,6.6,1.4,2.9,3.7,'Expected impact',r[3],RED);});
// 13
s=slide('ROI projections: 187% expected return with payback in about four months','Annual gains and investment in $K; scenarios from ROI_Calculator.xlsx');
const hd=o=>({text:o,options:{bold:true,color:'FFFFFF',fill:{color:NAVY},align:'center'}});
const rows=[[hd('Recommendation'),hd('Invest'),hd('Conservative'),hd('Expected'),hd('Optimistic'),hd('Payback')],
['R1 Discount cap','3.4','10.2 (205%)','17.1 (408%)','22.2 (561%)','2.4 mo'],
['R2 Scale South','6.7','9.4 (40%)','15.7 (133%)','20.4 (204%)','5.1 mo'],
['R3 Retention','5.0','6.4 (27%)','10.6 (111%)','13.8 (174%)','5.7 mo'],
[{text:'Total',options:{bold:true}},{text:'15.1',options:{bold:true}},{text:'26.0 (72%)',options:{bold:true}},{text:'43.3 (187%)',options:{bold:true}},{text:'56.3 (273%)',options:{bold:true}},{text:'4.2 mo',options:{bold:true}}]];
s.addTable(rows,{x:0.5,y:1.7,w:9,colW:[2.0,0.9,1.7,1.7,1.7,1.0],fontFace:F,fontSize:12,border:{type:'solid',pt:0.75,color:'BFBFBF'},align:'center',rowH:0.5});
s.addText('Assumptions: conservative 60%, optimistic 130% of expected gain. R1 recovers 50% of losses on discounts above 20%; R2 lifts South profit 8%; R3 lifts top-customer profit 5%. Costs are 5% of revenue times 2-4%.',{x:0.5,y:4.5,w:9,h:0.6,fontFace:F,fontSize:11,italic:true,color:GREY,isTextBox:true,margin:0});
// 14
s=slide('Implementation timeline: pilot in month 1, full rollout by month 6');
const ph=[['Pilot','Month 0-1',0.5,2.2,NAVY,['Activities: set discount cap; map South playbook','Owner: Operations lead','KPI: loss-making orders %']],
['Rollout','Month 2-4',2.8,3.4,GREEN,['Activities: extend to East, North, West; assign account owners','Owner: Business head','KPI: revenue and margin per region']],
['Optimize','Month 5-6',6.3,3.2,RED,['Activities: review results, adjust caps and loyalty terms','Owner: Analytics team','KPI: ROI achieved vs 187% plan']]];
ph.forEach(q=>{s.addShape(p.ShapeType.rect,{x:q[2],y:1.6,w:q[3],h:0.6,fill:{color:q[4]},line:{color:q[4]}});
  s.addText(q[0]+'  ('+q[1]+')',{x:q[2],y:1.6,w:q[3],h:0.6,fontFace:F,fontSize:13,bold:true,color:'FFFFFF',align:'center',valign:'middle',isTextBox:true,margin:0});
  s.addText(q[5].map((t,i)=>({text:t,options:{breakLine:i<2}})),{x:q[2]+0.05,y:2.4,w:q[3]-0.15,h:2.4,fontFace:F,fontSize:12,color:'333333',valign:'top',paraSpaceAfter:8,isTextBox:true,margin:0});});
// 15
s=slide('Decisions requested and next steps');
box(s,0.5,1.4,4.4,3.7,'Decisions needed from leadership',['Approve $15.1K budget for the three initiatives','Name an owner for each recommendation','Green-light the discount-cap pilot next month'],GREEN);
box(s,5.1,1.4,4.4,3.7,'Appendix & links',['GitHub: github.com/YOUR-USERNAME/executive-decision-report','Notebook: Final_Analysis_YourName.ipynb','ROI model: ROI_Calculator.xlsx']);
p.writeFile({fileName:'Executive_Decision_Report_YourName.pptx'}).then(()=>console.log('done',n));
