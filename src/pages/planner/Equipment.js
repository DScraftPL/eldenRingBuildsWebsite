import talismansData from '../../data/talismans.json'
import headData from '../../data/head.json'
import chestData from '../../data/chest.json'
import handsData from '../../data/hands.json'
import legsData from '../../data/legs.json'

//maybe sort and add None to the top? QoL
const headNames = Object.keys(headData).sort()
const chestNames = Object.keys(chestData).sort()
const handsNames = Object.keys(handsData).sort()
const legsNames = Object.keys(legsData).sort()
const talismansNames = Object.keys(talismansData).sort()

function HeadSlot({ chosenEquipment, updateChosenArmor }) {
  return (<div>
    <select
      id={'selectHead'}
      className="w-72"
      onChange={(e) => updateChosenArmor(e, 'head')}
      value={chosenEquipment.armor['head']}
    >
      {
        headNames.map((name) => (
          <option key={name} value={name}>{name}</option>
        ))
      }
    </select>
  </div>)
}
function ChestSlot({ chosenEquipment, updateChosenArmor }) {
  return (<div>
    <select
      id={'selectChest'}
      className="w-72"
      onChange={(e) => updateChosenArmor(e, 'chest')}
      value={chosenEquipment.armor['chest']}
    >
      {
        chestNames.map((name) => (
          <option key={name} value={name}>{name}</option>
        ))
      }
    </select>
  </div>)
}
function HandsSlot({ chosenEquipment, updateChosenArmor }) {
  return (<div>
    <select
      id={'selectHands'}
      className="w-72"
      onChange={(e) => updateChosenArmor(e, 'hands')}
      value={chosenEquipment.armor['hands']}
    >
      {
        handsNames.map((name) => (
          <option key={name} value={name}>{name}</option>
        ))
      }
    </select>
  </div>)
}
function LegsSlot({ chosenEquipment, updateChosenArmor }) {
  return (<div>
    <select
      id={'selectLegs'}
      className="w-72"
      onChange={(e) => updateChosenArmor(e, 'legs')}
      value={chosenEquipment.armor['legs']}
    >
      {
        legsNames.map((name) => (
          <option key={name} value={name}>{name}</option>
        ))
      }
    </select>
  </div>)
}

function TalismanSlot({ id, chosenEquipment, updateChosenTalisman }) {
  return (<div>
    <select
      id={'selectTalisman' + id}
      onChange={(e) => updateChosenTalisman(e, 'talisman' + id)}
      value={chosenEquipment.talismans['talisman' + id]}
    >
      {talismansNames.map((talisman) => (
        <option key={talisman} value={talisman}>{talisman}</option>
      ))}
    </select>
  </div>)
}

function Equipment({ chosenEquipment, updateChosenTalisman, updateChosenArmor }) {
  return (<div className='flex'>
    <div className='border-black border-2 m-2 p-2 space-y-2 dark:border-white dark:bg-zinc-900 dark:text-white'>
      <TalismanSlot id="1" chosenEquipment={chosenEquipment} updateChosenTalisman={updateChosenTalisman} />
      <TalismanSlot id="2" chosenEquipment={chosenEquipment} updateChosenTalisman={updateChosenTalisman} />
      <TalismanSlot id="3" chosenEquipment={chosenEquipment} updateChosenTalisman={updateChosenTalisman} />
      <TalismanSlot id="4" chosenEquipment={chosenEquipment} updateChosenTalisman={updateChosenTalisman} />
    </div>
    <div className='border-black border-2 m-2 p-2 space-y-2 dark:border-white dark:bg-zinc-900 dark:text-white'>
      <HeadSlot chosenEquipment={chosenEquipment} updateChosenArmor={updateChosenArmor} />
      <ChestSlot chosenEquipment={chosenEquipment} updateChosenArmor={updateChosenArmor} />
      <HandsSlot chosenEquipment={chosenEquipment} updateChosenArmor={updateChosenArmor} />
      <LegsSlot chosenEquipment={chosenEquipment} updateChosenArmor={updateChosenArmor} />
    </div>
  </div>)
}

export default Equipment;
