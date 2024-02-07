
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react';
import { BiRightArrow } from 'react-icons/bi';
import StaticBtn from '../Buttons/staticBtn';
type props = {
  skills: string[];
  title: string
}
export default function Collapse(props: props) {
  const [show, setshow] = useState(false)
  const variants = {
    initial: {
      y: 20,
      opacity: 0
    },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05
      }
    }),
    exit: (i: number) => ({
      y: 50,
      opacity: 0,
      transition: {
        delay: i * 0.02
      }
    })

  }
  return (
    <motion.div className='py-2 overflow-hidden'>
      <motion.button className='mb-2 flex items-center gap-[4px]' onClick={() => setshow(pre => !pre)}>
        {/* @ts-ignore */}
        <BiRightArrow className={`${show ? "rotate-[90deg]" : "rotate-[0deg]"} -mt-[4px]  duration-300 transition-all`} />
        <span className="text-xl block font-thin ">{props.title}</span>
      </motion.button>
      <motion.ul transition={{ duration: .3 }} className='flex gap-3 flex-wrap duration-300 transition-all'>
        <AnimatePresence mode='sync'>
          {show && props.skills.map((skill, i) => (
            <motion.li variants={variants} initial="initial" animate="animate" exit="exit" custom={i} key={i}>
              <StaticBtn>
                {skill}
              </StaticBtn>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </motion.div>
  )
}
