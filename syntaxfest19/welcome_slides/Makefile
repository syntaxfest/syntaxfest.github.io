# set latexfile to the name of the main file without the .tex
#latexfile = spsem2012lexgen
latexfile = main
# put the names of figure files here.  include the .eps
figures =  
includedfiles = 

TEX = latex
#TEX = pdflatex

# *.fig files may be in ./Figs
vpath %.fig Figs

$(latexfile).dvi : $(figures) $(includedfiles) $(latexfile).tex


%.eps : %.fig
	fig2dev -L eps $< > $@

$(latexfile).pdf : $(latexfile).ps
	ps2pdf $(latexfile).ps $(latexfile).pdf

pdf :	$(latexfile).ps 
	ps2pdf -dCompatibility=1.4 $(latexfile).ps $(latexfile).pdf

bib :	$(latexfile).dvi
	bibtex $(latexfile)
	latex $(latexfile)
	latex $(latexfile)
	bibtex $(latexfile)
	latex $(latexfile)
	latex $(latexfile) 

$(latexfile).ps : $(latexfile).dvi
	dvips  $(latexfile) -o $(latexfile).ps
#	dvips  -t a4 -Ppdf $(latexfile) -o $(latexfile).ps

ps : $(latexfile).ps 

$(latexfile).tar.gz : $(figures) $(latexfile).tex
	tar -czvf $(latexfile).tar.gz $(figures) $(latexfile).tex Figs/*.fig

tarball: $(latexfile).tar.gz


clean: 
	rm -f $(latexfile).bbl
	rm -f $(latexfile).log
	rm -f $(latexfile).dvi
	rm -f $(latexfile).blg
	rm -f $(latexfile).aux
	rm -f $(latexfile).ps
	rm -f $(latexfile).pdf
check:
	cat $(latexfile).log | grep undef

dist-clean: clean
	rm -f $(latexfile).ps
	rm -f $(latexfile).pdf

view: ps pdf 
	open $(latexfile).pdf

edit:
	xemacs $(latexfile).tex
