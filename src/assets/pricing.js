import crown from '../assets/crown.svg'
import goldcrown from '../assets/goldcrown.svg'
import purplecrown from '../assets/purplecrown.svg'
import greencrown from '../assets/greencrown.svg'
import checkicon from '../assets/check.svg'
import crossicon from '../assets/cross.svg'

export const priceCard =[
    {
        cardIcon: crown,
        cardTitle: 'Silver Plan',
        initMonthlyPrice: '₹300',
        monthlyPrice: '₹199',
        initYearlyPrice: '₹2,400',
        yearlyPrice: '₹2,000',
        platformTag: '💻 DESKTOP + MOBILE',
        btnText: 'BUY SILVER PLAN',
        checkList: [
            {
                checkIcon: checkicon,
                name: 'Inventory'
            },
            {
                checkIcon: checkicon,
                name: 'Sales'
            },
            {
                checkIcon: checkicon,
                name: 'Customer'
            },
            {
                checkIcon: crossicon,
                name: 'Purchase'
            },
            {
                checkIcon: crossicon,
                name: 'Finance'
            },
            {
                checkIcon: crossicon,
                name: 'E-Invoice / E-way Bill'
            },
            {
                checkIcon: checkicon,
                name: 'Support (Mail)'
            },
        ]
    },
    {
        cardIcon: goldcrown,
        cardTitle: 'Gold Plan',
        initMonthlyPrice: '₹600',
        monthlyPrice: '₹499',
        initYearlyPrice: '₹6,000',
        yearlyPrice: '₹5,500',
        platformTag: '💻 DESKTOP + MOBILE',
        btnText: 'BUY GOLD PLAN',
        checkList: [
            {
                checkIcon: checkicon,
                name: 'Inventory'
            },
            {
                checkIcon: checkicon,
                name: 'Sales'
            },
            {
                checkIcon: checkicon,
                name: 'Customer'
            },
            {
                checkIcon: checkicon,
                name: 'Purchase'
            },
            {
                checkIcon: crossicon,
                name: 'Finance'
            },
            {
                checkIcon: crossicon,
                name: 'E-Invoice / E-way Bill'
            },
            {
                checkIcon: checkicon,
                name: 'Support (Mail)'
            },
        ]
    },
    {
        cardIcon: greencrown,
        cardTitle: 'Platinum Plan',
        initMonthlyPrice: '₹1,500',
        monthlyPrice: '₹999',
        initYearlyPrice: '₹12,000',
        yearlyPrice: '₹11,000',
        platformTag: '💻 DESKTOP + MOBILE',
        btnText: 'BUY PLATINUM PLAN',
        checkList: [
            {
                checkIcon: checkicon,
                name: 'Inventory'
            },
            {
                checkIcon: checkicon,
                name: 'Sales'
            },
            {
                checkIcon: checkicon,
                name: 'Customer'
            },
            {
                checkIcon: checkicon,
                name: 'Purchase'
            },
            {
                checkIcon: checkicon,
                name: 'Finance'
            },
            {
                checkIcon: crossicon,
                name: 'E-Invoice / E-way Bill'
            },
            {
                checkIcon: checkicon,
                name: 'Support (Mail)'
            },
        ]
    },
    {
        cardIcon: purplecrown,
        cardTitle: 'Enterprise Plan',
        monthlyPrice: 'Custom Pricing',
        yearlyPrice: 'Custom Pricing',
        platformTag: 'All Platinum features Plus',
        btnText: 'TALK TO SALES',
        checkList: [
            {
                checkIcon: checkicon,
                name: 'BOM'
            },
            {
                checkIcon: checkicon,
                name: 'Production Planning'
            },
            {
                checkIcon: checkicon,
                name: 'Work Order Management'
            },
            {
                checkIcon: checkicon,
                name: 'Quality Control'
            },
            {
                checkIcon: checkicon,
                name: 'Employee Management'
            },
            {
                checkIcon: checkicon,
                name: 'Attendance Management'
            },
            {
                checkIcon: checkicon,
                name: 'Leave Mangement'
            },
        ]
    },
]

export const modalCard = [
    {
        title: 'SALES',
        items: [
            {
            cell1: 'Invoice',
            cell2: checkicon,
            cell3: checkicon,
            cell4: checkicon,
            cell5: checkicon
            },
            {
            cell1: 'Cash Memo',
            cell2: crossicon,
            cell3: checkicon,
            cell4: checkicon,
            cell5: checkicon
            },
            {
            cell1: 'Delivery Challan',
            cell2: crossicon,
            cell3: checkicon,
            cell4: checkicon,
            cell5: checkicon
            },
            {
            cell1: 'Performa Invoice',
            cell2: crossicon,
            cell3: checkicon,
            cell4: checkicon,
            cell5: checkicon
            },
            {
            cell1: 'Sales Order',
            cell2: crossicon,
            cell3: checkicon,
            cell4: checkicon,
            cell5: checkicon
            },
            {
            cell1: 'Credit Note',
            cell2: checkicon,
            cell3: checkicon,
            cell4: checkicon,
            cell5: checkicon
            },
            {
            cell1: 'E-Invoice',
            cell2: crossicon,
            cell3: crossicon,
            cell4: checkicon,
            cell5: checkicon
            },
            {
            cell1: 'E-wayBill',
            cell2: crossicon,
            cell3: crossicon,
            cell4: checkicon,
            cell5: checkicon
            },
        ]
    },
    {
        title: 'CUSTOMER',
        items: [
            {
            cell1: 'Customer',
            cell2: checkicon,
            cell3: checkicon,
            cell4: checkicon,
            cell5: checkicon
            },
            {
            cell1: 'Receive Payment',
            cell2: checkicon,
            cell3: checkicon,
            cell4: checkicon,
            cell5: checkicon
            },
            {
            cell1: 'Ledger',
            cell2: checkicon,
            cell3: checkicon,
            cell4: checkicon,
            cell5: checkicon
            }
        ]
    },
    {
        title: 'SUPPLIER',
        items: [
            {
            cell1: 'Supplier',
            cell2: crossicon,
            cell3: checkicon,
            cell4: checkicon,
            cell5: checkicon
            },
            {
            cell1: 'Make Payment',
            cell2: crossicon,
            cell3: checkicon,
            cell4: checkicon,
            cell5: checkicon
            },
            {
            cell1: 'Ledger',
            cell2: crossicon,
            cell3: checkicon,
            cell4: checkicon,
            cell5: checkicon
            },
            {
            cell1: 'Purchase Orders',
            cell2: crossicon,
            cell3: checkicon,
            cell4: checkicon,
            cell5: checkicon
            },
            {
            cell1: 'Debit Notes',
            cell2: crossicon,
            cell3: checkicon,
            cell4: checkicon,
            cell5: checkicon
            },
        ]
    },
    {
        title: 'REPORTS',
        items: [
            {
            cell1: 'Sales Reports',
            cell2: checkicon,
            cell3: checkicon,
            cell4: checkicon,
            cell5: checkicon
            },
            {
            cell1: 'GST Reports',
            cell2: crossicon,
            cell3: checkicon,
            cell4: checkicon,
            cell5: checkicon
            },
            {
            cell1: 'Purchasing Report',
            cell2: crossicon,
            cell3: checkicon,
            cell4: checkicon,
            cell5: checkicon
            },
            {
            cell1: 'Stock Report',
            cell2: crossicon,
            cell3: checkicon,
            cell4: checkicon,
            cell5: checkicon
            },
        ]
    },
    {
        title: 'FINANCE',
        items: [
            {
            cell1: 'Expenses',
            cell2: crossicon,
            cell3: crossicon,
            cell4: checkicon,
            cell5: checkicon
            },
            {
            cell1: 'Journal Entry',
            cell2: crossicon,
            cell3: crossicon,
            cell4: checkicon,
            cell5: checkicon
            },
            {
            cell1: 'General Ledger',
            cell2: crossicon,
            cell3: crossicon,
            cell4: checkicon,
            cell5: checkicon
            },
            {
            cell1: 'Group Ledger',
            cell2: crossicon,
            cell3: crossicon,
            cell4: checkicon,
            cell5: checkicon
            },
            {
            cell1: 'Day Book',
            cell2: crossicon,
            cell3: crossicon,
            cell4: checkicon,
            cell5: checkicon
            },
            {
            cell1: 'Trial Balance',
            cell2: crossicon,
            cell3: crossicon,
            cell4: checkicon,
            cell5: checkicon
            },
            {
            cell1: 'Profit & Loss Account',
            cell2: crossicon,
            cell3: crossicon,
            cell4: checkicon,
            cell5: checkicon
            },
            {
            cell1: 'Balance Sheet',
            cell2: crossicon,
            cell3: crossicon,
            cell4: checkicon,
            cell5: checkicon
            },
            {
            cell1: 'Bank Reconciliation',
            cell2: crossicon,
            cell3: crossicon,
            cell4: checkicon,
            cell5: checkicon
            },
            {
            cell1: 'Project Management',
            cell2: crossicon,
            cell3: crossicon,
            cell4: checkicon,
            cell5: checkicon
            },
        ]
    },
]