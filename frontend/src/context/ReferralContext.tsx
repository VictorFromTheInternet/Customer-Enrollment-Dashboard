import { createContext, useContext, useState, type ReactNode } from 'react'

interface Referral {
  id: string
  customerName: string
  customerTIN: string
  primaryEmail: string
  primaryPhone: string
  referralStatus: 'referral' | 'doc prep' | 'implementation' | 'final review' | 'audited' | 'rejected'
  dateOfReferral: string
}

interface ReferralContextType {
  referrals: Referral[]
  addReferral: (referral: Omit<Referral, 'id' | 'dateOfReferral'>) => void
  updateReferralStatus: (id: string, status: Referral['referralStatus']) => void
  deleteReferral: (id: string) => void
}

const ReferralContext = createContext<ReferralContextType | undefined>(undefined)

export function ReferralProvider({ children }: { children: ReactNode }) {
  const [referrals, setReferrals] = useState<Referral[]>([])

  const addReferral = (referral: Omit<Referral, 'id' | 'dateOfReferral'>) => {
    const newReferral: Referral = {
      ...referral,
      id: crypto.randomUUID(),
      dateOfReferral: new Date().toISOString()
    }
    setReferrals([...referrals, newReferral])
  }

  const updateReferralStatus = (id: string, status: Referral['referralStatus']) => {
    setReferrals(referrals.map(ref => 
      ref.id === id ? { ...ref, status } : ref
    ))
  }

  const deleteReferral = (id: string) => {
    setReferrals(referrals.filter(ref => ref.id !== id))
  }

  return (
    <ReferralContext.Provider value={{
      referrals,
      addReferral,
      updateReferralStatus,
      deleteReferral
    }}>
      {children}
    </ReferralContext.Provider>
  )
}

export function useReferrals() {
  const context = useContext(ReferralContext)
  if (!context) {
    throw new Error('useReferrals must be used within ReferralProvider')
  }
  return context
}