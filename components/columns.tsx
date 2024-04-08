"use client"

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal, ArrowUpDown, Club} from "lucide-react"

import { ClubCard } from "@/components/clubCard"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

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

export type Day = {
  
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
    {
        id: "actions",
        cell: ({ row }) => {
          const club = row.original
     
          return (
          <Dialog>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                {/* <DropdownMenuItem
                  onClick={() => navigator.clipboard.writeText(club.AdvisorEmail)}
                >
                  Copy Advisor Email
                </DropdownMenuItem> */}
                <DropdownMenuSeparator />
                <DialogTrigger asChild>
                  <DropdownMenuItem>
                    <span>More Info</span>
                  </DropdownMenuItem>
                </DialogTrigger>
              </DropdownMenuContent>
            </DropdownMenu>



              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>{club.Name}</DialogTitle>
                  <br />
                  <DialogDescription>
                    Room: {club.Room}
                  </DialogDescription>
                  <DialogDescription>
                    Day(s) Running: {club.Day}
                  </DialogDescription>
                  <DialogDescription>
                    Period: {club.Period}
                  </DialogDescription>
                  <DialogDescription>
                    {club.Paired == null ? (
                      "Not Paired"
                    ) : (
                      club.Paired
                    )}
                  </DialogDescription>
                  <DialogDescription>
                    Leadership (Grade): {club.Leadership}
                  </DialogDescription>
                  <DialogDescription>
                    Leadership Email: {club.LeadershipEmails}
                  </DialogDescription>
                  <DialogDescription>
                    Advisor Name: {club.AdvisorName}
                  </DialogDescription>
                  <DialogDescription>
                    Advisor Email: {club.AdvisorEmail}
                  </DialogDescription>
                </DialogHeader>
                <div className="flex items-center space-x-2">
                </div>
                {/* <DialogFooter className="sm:justify-start">
                  <DialogClose asChild>
                    <Button type="button" variant="secondary">
                      Close
                    </Button>
                  </DialogClose>
                </DialogFooter> */}
              </DialogContent>
            </Dialog>
          )
        },
      },
  ]

