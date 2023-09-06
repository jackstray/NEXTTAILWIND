"use client"
import Image from 'next/image'
import { SectionHero } from '@/components/SectionHero'
import { SectionServices } from '@/components/SectionServices'
import {SimpleSlider} from '@/components/SimpleSlider'


export default function Home() {
  return (
    <>
    <SectionHero />
    <SectionServices />
    </>
  )
}
