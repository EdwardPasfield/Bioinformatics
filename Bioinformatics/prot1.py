#!/usr/local/bin/python2.7
#import urllib.request
#import cgi
#import cgitb
#enable.cgitb()
import Bio
#import ExPASy
#from Bio import SwissProt
#from Bio import SeqIO
#http://www.uniprot.org/uniprot/uniprot_id(Accession code)
#http://www.uniprot.org/uniprot/uniprot_id.fasta(fastaformat of the protein in question)
#import io
#import re

#regmotif = r"[^P][^PKRHW][VLSWFNQ][ILTYWFN][FIY][^PKRH]"
#regaccess = r"[OPQ][0-9][A-Z0-9][^3][0-9]|[A-NR-Z][0-9]([A-Z][A-Z0-9][^2][0-9][^1,2]"

#def getaccess(inputseq, overlap):
    #accessor = inputseq.split("|")[1]

    #search(accessor, inputseq, overlap)


#data = urllib.request.urlopen("http://www.uniprot.org/uniprot/" + getaccess + ".fasta").read()
#print(data)


#.name will get the accession code
#user_input = input ("Type in your Accession code: ")

#handle = ExPASy.get_sprot_raw(user_input)
#record = SwissProt.read(handle)
#handle.close()

#print (record.description)
