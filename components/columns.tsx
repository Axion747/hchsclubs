"use client"

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal, ArrowUpDown} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export type ClubInfo = {
    Name: string
    Room: string
    Day: string
    Period: string
    Paired: string
    Leadership: string
    LeadershipEmails: string
    AdvisorName: string
    AdvisorEmail: string
    IDNum: number
}

export const columns: ColumnDef<ClubInfo>[] = [
    {
      accessorKey: "Name",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Club Name
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
    },
    {
      accessorKey: "Room",
      header: "Room",
    },
    {
      accessorKey: "Day",
      header: "Day",
    },
    {
      accessorKey: "Period",
      header: "Period",
    },
    // {
    //   accessorKey: "Paired",
    //   header: "Paired",
    // },
    // {
    //   accessorKey: "Leadership",
    //   header: "Leadership",
    // },
    // {
    //   accessorKey: "LeadershipEmails",
    //   header: "Leadership Emails",
    // },
    // {
    //   accessorKey: "AdvisorName",
    //   header: "Advisor Name",
    // },
    // {
    //   accessorKey: "AdvisorEmail",
    //   header: "Advisor Email",
    // },
    // {
    //   accessorKey: "IDNum",
    //   header: "ID Number",
    // },
    {
        id: "actions",
        cell: ({ row }) => {
          const payment = row.original
     
          return (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem
                  onClick={() => navigator.clipboard.writeText(payment.Room)}
                >
                  Copy payment ID
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>More Info</DropdownMenuItem>
                <DropdownMenuItem>Contact</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )
        },
      },
  ]

